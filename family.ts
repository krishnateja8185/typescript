class Son
{
	sname:string;
	sage:number;
	scolor:string;
	
	constructor(name:string,id1:number,name1:string){
		
		this.sname=name;
		this.sage=id1;
		this.scolor=name1;
	}
		
		getStd(){
			
			console.log("Hi iam krishnateja");
		}
}
class Parent extends Son{
	
	pname:string;
	page:number;
	
	constructor(name2:string,id:number,name:string,id1:number,name1:string){
		super(name,id,name1);
		this.pname=name2;
		this.page=id;
		console.log(this.pname);
		console.log(this.page);
		console.log(this.sname);
		console.log(this.sage);
		console.log(this.scolor);
		
		
	}
}
var p=new Parent("srinu",50,"krishna",24,"black");
p.getStd();