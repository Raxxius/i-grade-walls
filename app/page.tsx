import Header from "./_subcomponents/Header";
import SideBar from "./_subcomponents/SideBar";
import Main from "./_subcomponents/Main";
import About from "./_subcomponents/About";

export default function Home() {

  const headerLayout =
    "h-[100px] w-full bg-header";

  const sidebarLayout =
    "w-64 bg-sidebar";

  const mainLayout =
    "flex-1 bg-main";

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
