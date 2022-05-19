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

      const element = document.getElementById('output');
      if(changeDue >= 1){
        this.setState({output: `The total change due is $${changeDue}`})
        element.classList.remove('alert-danger');
        element.classList.add('alert-success');
      } else if (changeDue < 0) {
        this.setState({ output: `$${Math.abs(changeDue)} of additional money is owed.` });
        element.classList.add('alert-danger');
        element.classList.remove('alert-success');
      } else {
        this.setState({output: `No change due`})
        element.classList.remove('alert-danger');
        element.classList.add('alert-success');
      }

      this.setState({twenties: twenties, tens: tens, fives: fives, ones: ones, quarters: quarters, dimes: dimes, nickels: nickels, pennies: pennies})
    }
    
  render() {
    return(
      <div className="container mt-4">
        <h1>Change Calculator</h1>
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Enter Information</div>
                  <div className="card-text">

                  {/* INPUTS */}
                  <div class="input-group input-lg">
                    <label htmlFor="amountDue" className=".col-lg-*">How much is due?</label>
                    <br/>
                      <input name="amountDue" className="input-boxes" type="number" id="amountDue" defaultValue={this.state.amountDue} onChange= {this.handleChange}/>
                    <br/>
                    <label htmlFor="amountReceived" className=".col-lg-*">How much was receieved?</label>
                    <br/>
                    <input name="amountReceived" className="input-boxes" type="number" id="amountReceived" defaultValue={this.state.amountReceived} onChange= {this.handleChange}/> 
                    <br/>
                    </div>
                    </div>
                    </div>
                    <div className="card-footer">
                    <button 
                      className="btn btn-primary btn-block"
                      type="button"
                      name="submit" 
                      id="submit"
                      onClick= {() => this.calculateChange()}>
                      Calculate
                    </button>
                    </div>
            </div>
            </div>

          {/* OUTPUTS */}
          <div className="col-8">
            <div className="card text-center">
              <div className="card-body bg-light mb-3">
                <div className="card-title">
                  <div id="output" className="outcomeAlerts alert mt-3" role="alert" name="output" onClick={this.calculateChange}>{this.state.output}</div>

                  {/* GRID FOR CHANGE DUE */}
                  <div className="row">
                  <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body bg-light mb-3">
                          <label>Twenties</label>
                          <p className="change" class="card-text text-center">{this.state.twenties}</p>
                          </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="card">
                        <div className="card-body bg-light mb-3">
                          <label>Tens</label>
                          <p className= "change" class="card-text text-center">{this.state.tens}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="card">
                        <div className="card-body bg-light mb-3">  
                          <label>Fives</label>
                          <p className= "change" class="card-text text-center">{this.state.fives}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                     <div className="card">
                        <div className="card-body bg-light mb-3"> 
                          <label>Ones</label>
                          <p className= "change" class="card-text text-center">{this.state.ones}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="card">
                        <div className="card-body bg-light mb-3">  
                          <label>Quarters</label>
                          <p className= "change" class="card-text text-center">{this.state.quarters}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="card">
                        <div className="card-body bg-light mb-3"> 
                          <label>Dimes</label>
                          <p className= "change" class="card-text text-center">{this.state.dimes}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="card">
                        <div className="card-body bg-light mb-3">
                          <label>Nickels</label>
                          <p className= "change" class="card-text text-center">{this.state.nickels}</p> 
                        </div>
                      </div> 
                    </div>
                    <div className="col-sm-3">
                      <div className="card">
                        <div className="card-body bg-light mb-3"> 
                          <label>Pennies</label>
                          <p className= "change" class="card-text text-center">{this.state.pennies}</p>
                        </div>
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
