import React from "react";
import "./main-section.scss";

type MainSectionProps = {
  children: React.ReactNode;
};

function MainSection({ children }: MainSectionProps): JSX.Element {
  return <section className="main-section">{children}</section>;
}

export default MainSection;
