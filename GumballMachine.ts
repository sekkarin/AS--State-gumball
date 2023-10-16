export class GumballMachine {
  static readonly SOLD_OUT: number = 0;
  static readonly NO_QUARTER: number = 1;
  static readonly HAS_QUARTER: number = 2;
  static readonly SOLD: number = 3;

  count: number = 0;
  state: number = GumballMachine.SOLD_OUT;

  constructor(count: number) {
    this.count = count;
    if (count > 0) {
      this.state = GumballMachine.NO_QUARTER;
    }
  }

  public insertQuarter() {
    if (this.state == GumballMachine.HAS_QUARTER) {
      console.log("You can't insert another quarter");
    } else if (this.state == GumballMachine.NO_QUARTER) {
      this.state = GumballMachine.HAS_QUARTER;
      console.log("You inserted a quarter");
    } else if (this.state == GumballMachine.SOLD_OUT) {
      console.log("You can't insert a quarter, the machine is sold out");
    } else if (this.state == GumballMachine.SOLD) {
      console.log("Please wait, we're already giving you a gumball");
    }
  }
  public ejectQuarter() {
    if (this.state == GumballMachine.HAS_QUARTER) {
      console.log("Quarter returned");
      this.state = GumballMachine.NO_QUARTER;
    } else if (this.state == GumballMachine.NO_QUARTER) {
      console.log("You haven't inserted a quarter");
    } else if (this.state == GumballMachine.SOLD) {
      console.log("Sorry, you already turned the crank");
    } else if (this.state == GumballMachine.SOLD_OUT) {
      console.log("You can't eject, you haven't inserted a quarter yet");
    }
  }
  public turnCrank() {
    if (this.state == GumballMachine.SOLD) {
      console.log("Turning twice doesn't get you another gumball!");
    } else if (this.state == GumballMachine.NO_QUARTER) {
      console.log("You turned but there's no quarter");
    } else if (this.state == GumballMachine.SOLD_OUT) {
      console.log("Your turned, but there are no gumballs");
    } else if (this.state == GumballMachine.HAS_QUARTER) {
      console.log("You turned...");
      this.state = GumballMachine.SOLD;
      this.dispense();
    }
  }

  public dispense() {
    if (this.state == GumballMachine.SOLD) {
      console.log("A gumball comes rolling out the slot");
      this.count = this.count - 1;
      if (this.count == 0) {
        console.log("Oops, out of gumball!");
        this.state = GumballMachine.SOLD_OUT;
      } else {
        this.state = GumballMachine.NO_QUARTER;
      }
    } else if (this.state == GumballMachine.NO_QUARTER) {
      console.log("You need to pay first");
    } else if (this.state == GumballMachine.SOLD_OUT) {
      console.log("No gumball dispensed");
    } else if (this.state == GumballMachine.HAS_QUARTER) {
      console.log("No gumball dispensed");
    }
  }

  // public  toString(){
  //   String status = "Gumball Machine";
  //   if(this.state == GumballMachine.HAS_QUARTER){
  // 	  status = status + "\n status : HAS QUARTER";
  //   }else if(this.state == GumballMachine.NO_QUARTER){
  // 	  status = status + "\n status : NO QUARTER";
  //   }else if(this.state==GumballMachine.SOLD){
  // 	  status = status + "\n status : SOLD";
  //   }else if(this.state==GumballMachine.SOLD_OUT){
  // 	  status = status + "\n status : SOLD OUT";
  //   }
  //   status = status + "\n count : "+this.count;
  //   return status;

  // }
}
