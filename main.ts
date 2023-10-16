import { GumballMachine } from "./GumballMachine";

function main() {
  const gumballMachine = new GumballMachine(20);
  console.log(gumballMachine);

  console.log(gumballMachine);
  //console.log(gumballMachine.toString());
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  console.log(gumballMachine);

  gumballMachine.insertQuarter();
  gumballMachine.ejectQuarter();
  gumballMachine.turnCrank();

  console.log(gumballMachine);

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.ejectQuarter();

  console.log(gumballMachine);

  gumballMachine.insertQuarter();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  console.log(gumballMachine);
}
main();
