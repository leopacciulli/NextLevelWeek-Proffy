import React from 'react';

import whatsapp from '../../assets/icons/whatsapp.svg'

import './styles.css'

export const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/14446712?s=460&u=c4f731828ecca0fdbaccd95ec0cd0efcf3d47d7c&v=4" alt="User"/>
        <div>
          <strong>Leonardo Pacciulli</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>Entusiastas das melhores tecnologias de matemática avançada.</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsapp} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}