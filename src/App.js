
import './App.css';
import {useState} from "react"

function App() {

  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState("");
  const [message,setMessage] = useState("");

  let calculateBmi = (event) =>{
    event.preventDefault()

    if(weight===0 || height ===0){
      alert("Enter your value")
    }
    else{
      let bmi = (weight/(height * height) * 703)
      setBmi(bmi.toFixed(1))
    }

    if(bmi < 25){
      setMessage("You are underweight")
    }

    else if(bmi >=25 && bmi<=30){
      setMessage("You are healthy Weight")
    }
    else{
      setMessage("you are overweight")
    }


  }

  let reload = () =>{
    window.location.reload()
  }


  return (
    <div className="App">
      <div className="container">
        <h1>BMI CALCULATOR</h1>

        <form onSubmit={calculateBmi}>
          <div className='weight'>
            <label>
              Weight (lbs)</label>
            <input type="text" placeHolder="Enter Your Weight" value={weight} onChange={(e) =>setWeight(e.target.value)} />
          </div>

          <div className='weight'>
            <label>
              heights (In)</label>
            <input type="text" placeHolder="Enter Your Height" value={height} onChange={(event) =>setHeight(event.target.value)} />
          </div>

          <div className='submitBtn'>
            <button type="submit" className="btn">Submit</button>
            <button type="submit" className="btn btn-outline" onclick={reload} >Reload</button>
          </div>
          <div className="center">
            <h3>your Bmi is :{bmi}</h3>
            <p>{message}</p>

          </div>
        </form>

      </div>
      

    </div>
  );
}

export default App;
