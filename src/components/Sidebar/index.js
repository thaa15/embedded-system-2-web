import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarWrapperContainer,
  SidebarRoute,
} from "./style";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapperContainer>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SideBtnWrap>
            <SidebarLink to="/" onClick={toggle}>
              Home
            </SidebarLink>
          </SideBtnWrap>
          <SideBtnWrap>
            <SidebarRoute to="/" onClick={toggle}>
              Monitor
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarWrapperContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
