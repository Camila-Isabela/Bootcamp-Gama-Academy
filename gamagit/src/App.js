import React, {Fragment} from 'react'


function App(props) {
  return (
    <Fragment>
      <h1>{props.title} {props.user}</h1>
      <input name="usuario" id="usuario" className="usarioInput" placeholder="Usuário" />
      <button type="button">Pesquisar</button>
    </Fragment>
  );
}

export default App;

//complicado fazer repo disso aqui!!