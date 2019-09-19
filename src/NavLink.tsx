import React from "react";
import { LinkProps, Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "grommet";

const StyledNavLink = styled.div`
  text-align: center;

  a {
    color: #b3b1b1;
    text-decoration: none;
  }
`;

type Props = {
  label?: React.ReactNode;
};

const NavLink: React.FC<LinkProps & Props> = ({ to, label = "" }) => (
  <Box margin="xsmall" background="dark-2" pad="xsmall">
    <StyledNavLink>
      <Link to={to}>{label}</Link>
    </StyledNavLink>
  </Box>
);

export default NavLink;
