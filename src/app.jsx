import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      amountDue: "",
      amountReceived: "",
      output: "",
      twenties: "",
      tens: "",
      fives: "",
      ones: "",
      quarters: "",
      dimes: "",
      nickels: "",
      pennies: ""
    };

    this.handleChange=this.handleChange.bind(this)
    this.calculateChange = this.calculateChange.bind(this);
  }
    handleChange(event) {
      this.setState({[event.target.name] : parseFloat(event.target.value)});
    }

    calculateChange(){
       var amountDue = this.state.amountDue;
       var amountReceived = this.state.amountReceived;
       var changeDue = (amountReceived - amountDue).toFixed(2); 

       var twenties = Math.floor(changeDue / 20);
       let remainder = changeDue - twenties * 20;
     
      var tens = Math.floor(remainder / 10);
       remainder = (remainder - tens * 10).toFixed(2);

      var fives = Math.floor(remainder / 5);
       remainder = (remainder - fives * 5).toFixed(2);
   
      var ones = Math.floor(remainder / 1);
       remainder = (remainder - ones * 1).toFixed(2);

      var quarters = Math.floor(remainder / .25);
       remainder = (remainder - quarters * .25).toFixed(2);
      console.log("line 46", remainder)
      var dimes = Math.floor(remainder / .10);
       remainder = (remainder - dimes * .10).toFixed(2);

      var nickels = Math.floor(remainder / .05);
       remainder = (remainder - nickels * .05).toFixed(2);

      var pennies = Math.floor(remainder / .01);

      if(changeDue >= 1){
        this.setState({output: `The total change due is $${changeDue}`})
      } else if (changeDue < 0) {
        this.setState({output: `Addition money owed`})
      } else {
        this.setState({output: `No change due`})
      }

      this.setState({twenties: twenties, tens: tens, fives: fives, ones: ones, quarters: quarters, dimes: dimes, nickels: nickels, pennies: pennies})
    }


  
    

  render() {
    return(
      <div className="container" id="container">
        <h1>Change Calculator</h1>
        <div className="row">
          <div className="col-sm-4">
            <div className="panel panel-default">
              <div className="panel-heading">Enter Information</div>
              <div className="panel-body">
                <div id="panel">

                  {/* INPUTS */}
                  <label htmlFor="amountDue">How much is due?</label>
                  <br/>
                    <input name="amountDue" type="number" id="amountDue" defaultValue={this.state.amountDue} onChange= {this.handleChange}/>
                  <br/>
                  <label htmlFor
                  ="amountReceived">How much was receieved?</label>
                  <br/>
                    <input name="amountReceived" type="number" id="amountReceived" defaultValue={this.state.amountReceived} onChange= {this.handleChange}/> 
                  <br/>
                  <button 
                    className="btn btn-primary"
                    type="button"
                    name="submit" 
                    id="submit"
                    onClick= {() => this.calculateChange()}>
                    Calculate
                  </button>
                </div>
              </div>
              </div>
          </div>

          {/* OUTPUTS */}
          <div className="col-sm-8">
            <div className="panel panel-default">
              <div className="panel-body">
                <div id="panel">
                  <div id="output" className="alert alert-success" name="output" onClick={this.calculateChange}>{this.state.output}</div>

                  {/* GRID FOR CHANGE DUE */}
                  <div className="row">
                    <div className="col-lg-3 text-center card card-body">
                      <label>Twenties</label>
                        <p className= "change">{this.state.twenties}</p>
                    </div>
                    <div className="col-lg-3 text-center card card-body">   
                      <label>Tens</label>
                      <p className= "change">{this.state.tens}</p>
                    </div>
                    <div className="col-lg-3 text-center card card-body">
                      <label>Fives</label>
                      <p className= "change">{this.state.fives}</p>
                    </div>
                    <div className="col-lg-3 text-center card card-body">
                        <label>Ones</label>
                        <p className= "change">{this.state.ones}</p>
                    </div>

                  <div className="row">
                    <div className="col-lg-3 text-center card card-body">
                      <label>Quarters</label>
                      <p className= "change">{this.state.quarters}</p>
                    </div>
                    <div className="col-lg-3 text-center card card-body">   
                      <label>Dimes</label>
                      <p className= "change">{this.state.dimes}</p>
                    </div>
                    <div className="col-lg-3 text-center card card-body">
                      <label>Nickels</label>
                        <p className= "change">{this.state.nickels}</p>  
                    </div>
                    <div className="col-lg-3 text-center card card-body">
                      <label>Pennies</label>
                      <p className= "change">{this.state.pennies}</p>
                    </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}


export default App;
