//import logo from './logo.svg';
import './App.css';

function App() {
    fetch ('https://api.imgflip.com/get_memes')
    .then((data)=>{
      return data.json();
    }).then((completedata)=>{
        //console.log(completedata);
        let data1="";
        completedata.map((values)=>{
          data1+=` <div class="card">
          <h1 class="title">${values.name}</h1>
          <img src=${values.url} alt="img" class="images">
          </div> `;
        });
        document.getElementById("cards").innerHTML=data1;
    }).catch((err)=>{
      console.log(err);
    })
    
  }

export default App;
