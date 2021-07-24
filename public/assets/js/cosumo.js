/*usei fetch e queryselector simples pois meu 
loop for esta dando erro de função o qual até agora não achei
solução =/
*/



fetch("http://localhost:8888/api/V1/about")
    .then(r => r.json())
    .then(jsonBody => {
        document.querySelector("#text").innerHTML = jsonBody.about[0].missao;
        document.querySelector("#text2").innerHTML = jsonBody.about[0].Visão;
        document.querySelector("#text3").innerHTML = jsonBody.about[0].Valores;
        console.log("teste de fetch do objeto about", jsonBody.about[0]);
    });

fetch("http://localhost:8888/api/V1/services")
    .then(r => r.json())
    .then(jsonBody => {
        document.querySelector(".serviceTitle").innerHTML = jsonBody.serv[0].title;
        document.querySelector(".service").innerHTML = jsonBody.serv[0].text;
        document.querySelector(".serviceTitle2").innerHTML = jsonBody.serv[1].title + ". &nbsp";
        document.querySelector(".service2").innerHTML = jsonBody.serv[1].text;
        document.querySelector(".serviceTitle3").innerHTML = jsonBody.serv[2].title + ". &nbsp";
        document.querySelector(".service3").innerHTML = jsonBody.serv[2].text;
        console.log("teste de fetch do array de serviços ", jsonBody.serv);
    });