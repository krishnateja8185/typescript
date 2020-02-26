class Kittu{
	kid:number;
	kname:string;
	kjob:string;
	kdept:number;
	kdesi:string;
	
	constructor(id:number,name:string,job:string,dept:number,desi:string){
		this.kid=id;
		this.kname=name;
		this.kjob=job;
		this.kdept=dept;
		this.kdesi=desi;
	}
		
		
		
	getStudent(){
		console.log(this.kid);
		console.log(this.kname);
		console.log(this.kjob);
		console.log(this.kdept);
		console.log(this.kdesi);
			
		}
		
}
var k=new Kittu(10,"krishna","IT",4,"software");
var m=new Kittu(20,"mohan","IT",5,"Software");
k.getStudent();
m.getStudent();