import React from "react";
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
  return (
    <div className="bg-primary w-full overflow-hidden">
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
