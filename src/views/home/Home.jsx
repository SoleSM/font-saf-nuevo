import React from 'react'
import Nav from "../../components/navbars/Nav";
import styled from "styled-components";
import './home.scss'
import logo from '../../assets/img/estrella.png'
import imagen1 from '../../assets/img/fyv.jpg'
import imagen2 from '../../assets/img/lacte.jpg'
import { Card } from '../../components/card';


const Imgestrella = styled.img`
  width:400px;
  height:400px;
  position: relative;
  left: 5%;
  top: 30px;
`;


export default function Home() {
  return (
    <>
      <Nav />


      {/* -----------HEADER----------- */}
      <header className="hero">
        <div className="textos-hero">
          <h1 className='titulo-hero'>Bienvenido a Soberanía Alimentaria Formoseña</h1>
          <img className='imagen-hero' width={200} height={200} src={logo} />
        </div>
        <div class="svg-hero" style={{ "height": "150px", "overflow": "hidden" }}>
          <svg className='svg-hero' viewBox="0 0 500 150" preserveAspectRatio="none"
            style={{ "height": "100%", "width": "100%" }}>
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ "stroke": "none", "fill": "#fff" }}></path>
          </svg>
        </div>
      </header>



      {/* -------------BODY------------- */}

      <div className='divisor'>
        <h2 className='divisor-titulo'>Conocé este proyecto</h2>
      </div>
      <div className="body">
        <div className='cards'>
          <Card
            imagen={imagen1}
            titulo="¿Qué es?"
            texto={"En Formosa, el Gobierno provincial lanzó un nuevo programa que beneficia a la economía de las familias y a los pequeños productores conocidos como paipperos (forman parte del PAIPPA).  Soberanía Alimentaria Formoseña es un programa que ofrece alimentos directamente del productor al consumidor, es decir, sin que existan intermediarios y agregados de valor entre la comercialización y las familias."}
          />

          <Card
            imagen={imagen2}
            titulo="¿Qué puedes encontrar en el programa?"
            texto="Se podrá acceder a una gran variedad de alimentos de producción local a precios referenciados. Desde frutas, verduras, hortalizas, carnes, productos lácteos y artesanales de los distintos consorcios adheridos al programa."
          />

          <Card
            imagen={imagen1}
            titulo="Objetivos"
            texto="Con esto se busca impulsar a la producción y consumo local, mejorar la nutrición y la seguridad alimentaria llevando a los stands productos de calidad garantizada. Mediante cronogramas el programa recorrerá todas las jurisdicciones de la provincia de Formosa para asegurarse de llegar a los lugares en donde se dan las mayores asimetrías en costos de producción y los precios que pagan los consumidores finales."
          />

        </div>
      </div>



      <div className='divisor-catalogo'>
        <h4 className='texto-catalogo'>Si quieres ver los productos que puedes encontrar en los stands del programa en tu zona te invitamos a que veas nuestro catálogo</h4>
        <a href='/Catalogo'>
          <button className='boton-catalogo'>Ver catálogo</button>
        </a>

      </div>


      {/* -----------FOOTER-------------- */}
      <div class="svg-hero" style={{ "height": "150px", "overflow": "hidden" }}>
        <svg className='svg-hero' viewBox="0 0 500 150" preserveAspectRatio="none"
          style={{ "height": "100%", "width": "100%" }}>
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ "stroke": "none", "fill": "#045694" }}></path>
        </svg>
      </div>

      <div className="footer">

        <div className='info-contacto'>
          <h5 className='titulo-footer'>Redes sociales</h5>
          <a>Facebook</a>
          <br />
          <a>Instagram</a>
        </div>

        <div className='marca'>
          <h5 className='texto-footer'>Todos los derechos reservados
            <br />
            Desarrollado por Dynamite Team 🧨</h5>

        </div>

        <div className='info-establecimiento'>
          <h5 className='texto-footer'>Gobierno de la provincia de Formosa<br />
            República Argentina
          </h5>
        </div>
      </div>

    </>
  )
}
