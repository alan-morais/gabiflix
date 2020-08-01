import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/alan-morais">
        <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f601.png" alt="emoji large smile" />
      </a>
      <p>
        Feito com o apoio da
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>

      </p>
    </FooterBase>
  );
}

export default Footer;
