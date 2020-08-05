import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import LandingImg from '../../assets/landing.svg'

import StudyImg from '../../assets/icons/study.svg'
import GiveClassesIcon from '../../assets/icons/give-classes.svg'
import PurpleHeartIcon from '../../assets/icons/purple-heart.svg'

import './styles.css'

export const Landing = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="Logo"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={LandingImg} alt="Landing" className="hero-image"/>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={StudyImg} alt="Study"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={GiveClassesIcon} alt="GiveClassesIcon"/>
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={PurpleHeartIcon} alt="PurpleHeartIcon"/>
        </span>
      </div>
    </div>
  )
}
