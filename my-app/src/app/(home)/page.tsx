import { ContactUs } from "./modules/ContactUs/ContactUs";
import { FAQ } from "./modules/FAQ";
import { Hero } from "./modules/Hero"
import { OurFocus } from "./modules/OurFocus";
import { OurProcess } from "./modules/OurProcess";
import { OurWork } from "./modules/OurWork";

export default function Home() {
  return(
    <>
      <Hero />
      <div id="OurFocus">
        <OurFocus />
      </div>
      <div id="OurWork">
        <OurWork />
      </div>
      <div id="FAQ">
        <FAQ />
      </div>
      <div id="ContactUs">
        <ContactUs />
      </div>
      <div id="OurProcess">
        <OurProcess />
      </div>
    </>
  );
}
