class Vehicle{
	vno:number;
	vname:string;
	vmy:number;
	nops:number;
	
	constructor(id:number,name:string,id1:number,id2:number){
		this.vno=id;
		this.vname=name;
		this.vmy=id1;
		this.nops=id2;
	}
}
class Bmw extends Vehicle{
	bcolor:string;
	
	constructor(name1:string,id:number,name:string,id1:number,id2:number){
		super(id,name,id1,id2);
		this.bcolor=name1;
		console.log(this.bcolor);
		console.log(this.vno);
		console.log(this.vname);
		console.log(this.vmy);
		console.log(this.nops);
	}
}
var b=new Bmw("red",2000,"BMW",2015,7);
