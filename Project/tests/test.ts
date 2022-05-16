import { expect } from "chai";
import { ethers } from "hardhat";


describe("Testing HelloWorld" , function(){
  it("Should deploy Hello World Contract", async function(){
    const helloWorldContractFactory = await ethers.getContractFactory("HelloWorld");
    const helloWorldContract = await helloWorldContractFactory.deploy();
    await helloWorldContract.deployed();
    const text = await helloWorldContract.getText();
    expect(text).to.eq("Hello World");
  });
});