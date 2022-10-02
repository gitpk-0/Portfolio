import React from "react";
// import

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "work", "skills", "about", "testimonials", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
