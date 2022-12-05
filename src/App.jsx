import './App.css'
import React from 'react'


import ListaAlunos from './components/repeticao/ListaAlunos';
// import Familia from './components/basicos/Familia';
// import FamiliaMembro from './components/basicos/FamiliaMembro';
 import Card from './components/layout/Card';
// import Aleatorio from './components/basicos/Aleatorio';
// import Fragmento from './components/basicos/Fragmento';
// import ComParametro from './components/basicos/ComParametro';
// import Primeiro from './components/basicos/Primeiro'

export default () => {
  return(
    <div className='App'> 
    <h1>Ranking Noturno - Race 2022</h1> 

    <div className='Cards'> 
      <Card titulo="Atualizado em 04/12" color="#00c8f8">
        <ListaAlunos></ListaAlunos>
      </Card>

      {/* <Card titulo="#05 Componente com Filhos" color="#00c8f8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome ="Pedro"/>
          
          <FamiliaMembro nome ="Ana"/>
          <FamiliaMembro nome ="Gustavo"/>
        </Familia>
      </Card>
      <Card titulo="#04 Desafio Aleatório" color="#fa6900">
        <Aleatorio min = {1} max = {60} />
      </Card>

      <Card titulo="#03 Fragmento" color="#e94c6f">
        <Fragmento />
       </Card>

      <Card titulo="#02 Com Parâmetro" color="#e8b71a">
       <ComParametro
        titulo = "Situação do Aluno"
        aluno = "Pedro Silva" 
        nota = {9.3} />  
      </Card>

    <Card titulo="#01 Primeiro Componente" color="#588c73">
       <Primeiro></Primeiro>
    </Card> */}
</div>

   
   
    
    
     
  </div>
  )
  
}