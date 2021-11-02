var names=new Array();
names[0]="Hello Yaakov";
names[1]="Good Bye John";
names[2]="Good boy Jen";
names[3]="Good Bye jason";
names[4]="Hello paul";
names[5]="Hello frank";
names[6]="Hello larry";
names[7]="Hello paula";
names[8]="Hello laura";
names[9]="Good Bye jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}