import Hero from "@/components/hero";
import LogoWall from "@/components/logo-wall";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <>
      <section className="intro">
        <div className="container">
            <Header />
            <Hero />
          </div>
      </section>
      <main>
        <section className="section-projects">
          <div className="container">
            <a className="projects"><h2>Projects I am proud of</h2></a>
            <div className="topgrid" id="projects">
            </div>
            <LogoWall />
          </div>
        </section>

      </main>
    </>
  );
}
