import React from 'react';
import Menu from '../../componets/Menu/index';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../componets/BannerMain';
import Carousel from '../../componets/Carousel';
import Footer from '../../componets/Footer';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Durante todo o seriado o Seu Madruga sempre era chamado de preguiçoso, mas neste vídeo veremos que o Madruguinha era gente que faz!"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />

    </div>
  );
}

export default Home;
