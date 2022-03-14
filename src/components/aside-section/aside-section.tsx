import React from "react";
import "./aside-section.scss";

type AsideSectionProps = {
  children: React.ReactNode;
};

function AsideSection({ children }: AsideSectionProps): JSX.Element {
  return <aside className="aside-section">{children}</aside>;
}

export default AsideSection;
