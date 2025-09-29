import React, { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(''); // 当前选中的 Section

  // 定义每个 Section 的 ID 和偏移量
  const sections = [
    { id: 'abstract', label: 'Abstract' },
    { id: 'motivation', label: 'Motivation' },
    { id: 'ssah', label: 'SSAH' },
    { id: 'sah', label: 'SAH' },
    { id: 'lessismore', label: 'Less Is More' },
    { id: 'discussion', label: 'Discussion' },
  ];

  // 滚动到指定 Section 的函数
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.scrollY + elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false); // 点击导航后关闭菜单
  };

  // 监听滚动事件以更新当前 Section
  useEffect(() => {
    const handleScrollEvent = () => {
      const headerHeight = document.querySelector('header').offsetHeight;

      // 遍历所有 Sections，检查滚动位置
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();

          // 检查当前滚动是否到达 Section（考虑 Header 高度）
          if (rect.top <= headerHeight + 10 && rect.bottom >= headerHeight + 10) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // 添加滚动事件监听器
    window.addEventListener('scroll', handleScrollEvent);

    // 清除滚动事件监听器
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [sections]);

  return (
    <header className="bg-gray-50 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1
          className="text-2xl font-bold text-gray-700 cursor-pointer"
          onClick={() => handleScroll('home')} // 点击 Logo 返回首页
        >
          Superficial SA Hypothesis
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 relative">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className={`relative pb-2 ${
                activeSection === section.id
                  ? 'font-bold text-gray-900' // 加粗文字
                  : 'text-gray-700'
              } hover:text-gray-900 focus:outline-none transition duration-200`}
            >
              {section.label}
              {activeSection === section.id && (
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-black"></span> // 下划线
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-50 shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleScroll(section.id)}
                  className={`${
                    activeSection === section.id
                      ? 'font-bold text-gray-900 underline underline-offset-4' // 高亮样式
                      : 'text-gray-700'
                  } hover:text-gray-900 focus:outline-none transition duration-200`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
