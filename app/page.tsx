import Header from "./_subcomponents/Header";
import SideBar from "./_subcomponents/SideBar";
import Main from "./_subcomponents/Main";
import About from "./_subcomponents/About";

export default function Home() {

  const headerLayout =
    "h-[100px] w-full bg-header text-black";

  // Sidebar: present on tablets (md) and above, hidden on mobile
  const sidebarLayout =
    "w-64 bg-sidebar";

  // Main: takes rest of content and is at least 100% height
  const mainLayout =
    "flex-1 bg-main";

  // About: present on laptop (lg) and above
  const aboutLayout =
    "w-64 bg-sidebar";

  return (
    <div className="h-screen w-screen flex flex-col">
      <Header layout={headerLayout} />
      <div className="flex h-full">
        <SideBar layout={sidebarLayout} />
        <Main layout={mainLayout} />
        <About layout={aboutLayout} />
      </div>
    </div>
  );
}
