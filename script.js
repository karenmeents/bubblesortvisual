$(document).ready(function(){
$('#start').click(function(){
    sort(myarr)
});

// const timer = ms => new Promise(res => setTimeout(res, ms))
let wait;
let timing;
let val=0;
let h=400;
let w=600;
let padding = 20
var myarr = [15,10, 5, 300 ,4 , 12, 52, 99, 3 , 72, 85, 19, 40,33, 1 ,141,2,248, 6,186];

let svg =d3.select('#graph')
    .append('svg')
    .attr('height', h)
    .attr('width', w)
    .attr('class', 'graph');


svg.selectAll('rect')
    .data(myarr)
    .enter()
    .append('rect')
    .attr('x', (d,i) => i*30)
    .attr('y', (d) => h-padding -d)
    .attr('width', 20)
    .attr('height', (d) => d);


svg.selectAll('text')
    .data(myarr)
    .enter()
    .append('text')
    .text((d) => d)
    .attr('x', (d,i) => i*30)
    .attr('y', (d) => h-padding -d -3);



function sort () {
    let noswaps;
       
    for(let i= myarr.length-1; i>=0; i--){
        noswaps = true;
       val=myarr[i];
        
        timing =setInterval(update(val),3000);
    
    if(noswaps){
   
        return myarr;
    }
}
}

function update(){
    for(let j=0; j< val; j++){
        let temp = myarr[j];
        if(temp >myarr[j+1]){
        myarr[j]=myarr[j+1];
        myarr[j+1] = temp;
        
        
       
       
$('#graph').empty()
   svg =d3.select('#graph')
   .append('svg')
   .attr('height', h)
   .attr('width', w)
   .attr('class', 'graph');


svg.selectAll('rect')
    .data(myarr)
    .enter()
    .append('rect')
    .attr('x', (d,i) => i*30)
    .attr('y', (d) => h-padding -d)
    .attr('width', 20)
    .attr('height', (d) => d)
    .attr("id", (d,i)=> `rectangle${i}`)


svg.selectAll('text')
    .data(myarr)
    .enter()
    .append('text')
    .text((d) => d)
    .attr('x', (d,i) => i*30)
    .attr('y', (d) => h-padding -d -3);
    noswaps = false;
console.log(`rectangle${j}`)
$(`#rectangle${j}`).attr('fill', '#138496');

$(`#rectangle${j+1}`).css('fill','#800080');
    return setInterval(sort,1000)
        }
       
    }
    $('rect').css('fill','black')   
    
}

})

