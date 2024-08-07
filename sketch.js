
1
let cor;
2
let posicaoHorizontal; // x
3
let posicaoVertical; // y
4
​
5
function setup() {
6
  createCanvas(400, 400);
7
   background(color(100,0,0));
8
  cor = color(random(0,255), random(0,255), random(0,255));
9
  posicaoHorizontal = 200;
10
  posicaoVertical = 200;
11
}
12
​
13
​
14
function draw() {
15
  
16
  fill(cor);
17
  circle(posicaoHorizontal,posicaoVertical,50);
18
 
19
  
20
  
21
  if (mouseX < posicaoHorizontal){
22
    posicaoHorizontal =  posicaoHorizontal - 1;
23
  }
24
  
25
  if (mouseX > posicaoHorizontal){
26
    posicaoHorizontal =  posicaoHorizontal + 1;
Não há mensagens de Lint
Linha atuallinha 1

Terminal
Limpar

​
Prévia
