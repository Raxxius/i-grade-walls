import Header from "./_subcomponents/Header";
import SideBar from "./_subcomponents/SideBar";
import Main from "./_subcomponents/Main";
import About from "./_subcomponents/About";

export default function Home() {
  // Header: spans entire width and is 00px tall
  const headerLayout =
    "h-[100px] flex items-center bg-white dark:bg-black px-4 md:px-6";

  // Sidebar: present on tablets (md) and above, hidden on mobile
  const sidebarLayout =
    "w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-40 hidden md:block";

  // Main: takes rest of content and is at least 100% height
  const mainLayout =
    "flex-1 ml-6 md:ml-0 min-h-full bg-gray-50 dark:bg-gray-900 px-4 md:px-8 pb-8";

  // About: present on laptop (lg) and above
  const aboutLayout =
    "hidden lg:block fixed right-0 top-[100px] bottom-0 w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 z-40 overflow-y-auto";

  return (
    <div className="h-screen">
      <Header layout={headerLayout} />
      <div className="flex">
        <SideBar layout={sidebarLayout} />
        <Main layout={mainLayout} />
        <About layout={aboutLayout} />
      </div>
    </div>
  );
}
