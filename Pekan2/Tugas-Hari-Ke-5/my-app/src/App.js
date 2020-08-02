import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return ( <
        div className = "App" > {
            /* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn React
                    </a>
                  </header> */
        } <
        div classname = "panel"
        style = {
            { fontSize: "20px" } } >
        <
        h1 > Form Pembelian Buah < /h1>  <
        tr >
        <
        td > Nama Pelanggan < /td>  <
        td > < input type = "text" / > < /td> <
        /tr>  <
        tr >
        <
        tr >
        <
        td > < label > Daftar Item < /label></td >
        <
        td > < input type = "checkbox"
        name = "buah"
        value = "0" > Semangka < br >
        <
        input type = "checkbox"
        name = "buah"
        value = "1" > Jeruk < br >
        <
        input type = "checkbox"
        name = "buah"
        value = "2" > Nanas < br >
        <
        input type = "checkbox"
        name = "buah"
        value = "3" > Salak < br >
        <
        input type = "checkbox"
        name = "buah"
        value = "4" > Anggur < /td> <
        /tr> <
        tr >
        <
        td > < input type = "submit"
        value = "Kirim" / > < /td> <
        /tr> <
        /div>  <
        /div>
    );
}

export default App;