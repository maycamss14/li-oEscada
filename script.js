let qtdeLances = Number(prompt ('Quantos lances de escada você gostaria de fazer?'));
// let material = "#";
let material = prompt ('Qual é o material que você quer utilizar na escada?');

let degrau = material;
let i = 0;
while (i < qtdeLances){
    console.log(degrau);
    degrau +=material;
    i++;
}