import React, { useState } from "react";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components/index";
import styles from "./src/style";

const App = () => {
  const [state, setState] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      setState(true);
    } else {
      setState(false);
    }
  });
  return (
    <div className="bg-primary w-full overflow-hidden" id="up">
      <a
        href="#up"
        style={{ opacity: state ? 1 : 0, transition: ".4s ease" }}
        className="fixed bottom-5 right-5 sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] rounded-full bg-slate-400 z-[50]"
      ></a>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}  bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.flexStart} bg-primary ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Billing />
          <CardDeal />
          <Business />
          <Clients />

          <CTA />
          <Footer />
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default App;
