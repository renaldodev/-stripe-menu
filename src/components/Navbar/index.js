import React from "react";
import { DropdownOption, DropdownProvider } from "../Dropdown";
import { Company, Developers, Products } from "../Content";
import { Container, DropdownStyles } from "./styles";

function Navbar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption name="Produtos" content={Products} />
            </li>
            <li>
              <DropdownOption name="Desenvolvedores" content={Developers} />
            </li>
            <li>
              <DropdownOption name="Empresa" content={Company} />
            </li>
          </ul>
        </Container>
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default Navbar;