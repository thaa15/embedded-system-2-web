import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./style";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/experience" onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink to="/achievement" onClick={toggle}>
            Achievement
          </SidebarLink>
          <SidebarLink to="/blog" onClick={toggle}>
            Blog
          </SidebarLink>
          <SidebarLink to="/galleries" onClick={toggle}>
            Gallery
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="https://api.whatsapp.com/send/?phone=821094027758&text=Hi%2C+let%E2%80%99s+talk+Himawan%21&app_absent=0" onClick={toggle}>
            Contact
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;