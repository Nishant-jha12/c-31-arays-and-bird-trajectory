var name1 = [["Shifa",7,"pink"],["Nishant",8,"blue"],["Tom",1,"red"],["Jerry",2,"orange"]]
console.log(name1[3][0]);

var trajectory = []
/*var position = [120,50];
trajectory.push(position);
console.log(trajectory)
position = [150,70];
trajectory.push(position);
console.log(trajectory)*/

trajectory = [[120,50],[200,80],[200,70]]
console.log(trajectory[2][1])

//to view/use the values inside an array, use th for loop
for(var i = 0;i<trajectory.length;i++){
    console.log(trajectory[i][0],trajectory[i][1])
}


