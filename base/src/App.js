import { useState } from 'react';

import activeHome from './assets/active-home.svg';
import closeModal from './assets/close-modal.svg';
import closedMenu from './assets/closed-menu.svg';
import inactiveLike from './assets/inactive-like.svg';
import inactiveSettings from './assets/inactive-settings.svg';
import likeImg from './assets/like.svg';
import openedMenu from './assets/open-menu.svg';

import imagem1 from './assets/gallery/image 1.png';
import imagem2 from './assets/gallery/image 2.png';
import imagem3 from './assets/gallery/image 3.png';
import imagem4 from './assets/gallery/image 4.png';
import imagem5 from './assets/gallery/image 5.png';
import imagem6 from './assets/gallery/image 6.png';
import imagem7 from './assets/gallery/image 7.png';
import imagem8 from './assets/gallery/image 8.png';
import imagem9 from './assets/gallery/image 9.png';
import imagem10 from './assets/gallery/image 10.png';

function Image(props) {
  return (
    <div className="image">
      <img className="image__img" src={props.src} alt="Imagem" onClick={props.openModal} />
      <div className="image__info">
        <h2 className="image__title">Lorem ipsum</h2>
        <span className="image__date">há 1 mês</span>
      </div>
      <img className={`image__like ${props.like[0] === 0 ? 'hidden' : ''}`} src={likeImg} alt="Like" />
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(0);
  const [modal, setModal] = useState([0, '']);
  const [like, setLike] = useState([0, '']);

  const images = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10];

  function openMenu() {
    const opened = menu === 0 ? 1 : 0;

    setMenu(opened);
  }

  function openModal(event) {
    const opened = modal[0] === 0 ? 1 : 0;
    const src = modal[0] === 0 ? event.target.src : '';

    console.log(event)

    setModal([opened, src]);
  }

  function giveLike(event) {
    const given = like[0] === 0 ? 1 : 0;
    const src = event.target.src;

    setLike([given, src]);
  }

  return (
    <div className="App">
      <div className={`menu-lateral ${menu === 0 ? '' : 'menu-lateral--open'}`}>
        <div className="menu-lateral__options">
          <img src={menu === 0 ? closedMenu : openedMenu} alt="Abrir Menu" onClick={openMenu} />
          <div className="menu-lateral__option">
            <img src={activeHome} alt="Home" />
            <span className={`menu-lateral__title ${menu === 0 ? 'hidden' : ''}`}>Início</span>
          </div>
          <div className="menu-lateral__option">
            <img src={inactiveLike} alt="Favoritos" />
            <span className={`menu-lateral__title ${menu === 0 ? 'hidden' : ''}`}>Favoritos</span>
          </div>
        </div>
        <div className="menu-lateral__options">
          <div className="menu-lateral__option">
            <img src={inactiveSettings} alt="Configurações" />
            <span className={`menu-lateral__title ${menu === 0 ? 'hidden' : ''}`}>Configurações</span>
          </div>
        </div>
      </div>
      <h1 className="App__title">Início</h1>
      <div className="gallery">
        {images.map((image, index) => <Image key={index} src={image} modal={modal} openModal={openModal} like={like} />)}
      </div>
      <div className={`modal ${modal[0] === 0 ? 'hidden' : ''}`} onClick={openModal}>
        <img className="modal__close" src={closeModal} alt="Fechar Modal" onClick={openModal} />
        <img className="modal__img" src={modal[1]} alt="Imagem" onClick={(event) => event.stopPropagation()} onDoubleClick={giveLike} />
        <img className={`modal__like ${like[0] === 0 ? 'hidden' : ''}`} src={likeImg} alt="Like" />
      </div>
    </div>
  );
}

export default App;
