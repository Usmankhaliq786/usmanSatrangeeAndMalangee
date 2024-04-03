import React from 'react';

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  React.useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", 'dark');
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className='relative'>
      {/* <img
        className={`w-12 cursor-pointer drop-shadow-[1px-1px-1px-rgba(0,0,0,0,1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
        src="https://media.istockphoto.com/id/1180847658/vector/vector-on-and-off-switch-dark-and-light-mode-switcher-for-phone-screens-tablets-and.jpg?s=612x612&w=0&k=20&c=iHIFeSYiAQQ3nFToVwqfPX0jQ-phk6PhKhW_GC1awS4="
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        alt=""
      />

      <img
        className={`w-12 cursor-pointer drop-shadow-[1px-1px-1px-rgba(0,0,0,0,1)] transition-all duration-300 ${theme === "light" ? "opacity-0" : "opacity-100"}`}
        src="https://media.istockphoto.com/id/1180847658/vector/vector-on-and-off-switch-dark-and-light-mode-switcher-for-phone-screens-tablets-and.jpg?s=612x612&w=0&k=20&c=iHIFeSYiAQQ3nFToVwqfPX0jQ-phk6PhKhW_GC1awS4="
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        alt=""
      /> */}



      
<label class="inline-flex items-center cursor-pointer">
  <input   type="checkbox"
          value=""
          className="sr-only peer"
          checked={theme === "dark"}
          onChange={handleToggle} />
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
</label>

    </div>
  );
};

export default DarkMode;
