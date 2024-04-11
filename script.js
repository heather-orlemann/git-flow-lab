const poems = [
  {
    author: "Cece",
    poem: "Roses are red \n Violets are blue \n Sunflowers are yellow \n I bet you were expecting something romantic but no -- these are just gardening facts.",
    image: "sunflower.jpeg",
  },
  {
    author: "Anvit",
    poem: "Roses are red \n Pizza sauce is too \n I ordered a large \n None of it is for you ",
    image: "pizza.jpeg",
  },
  {
    author: "Ernie",
    poem: "Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2",
    image: "bee.jpeg",
  },
  {
    author: "Jane",
    poem: "Roses are red \n Violets are blue \n I'm learning gitflow \n With all of you",
    image: "coffee.webp",
  },
  {
    author: "Erica",
    poem: "Roses are red \n Violets are blue \n I have no idea what I'm doing \n Peanut Butter",
    image: "peanut-butter.jpeg",
  },
  {
    author: "Heather",
    poem: "Roses are red \n Violets are blue \n Cats are so cute \n and dogs are adorable too",
    image: "cute.jpg",
  },
  {
    author: "Elina",
    poem: "Roses Are Red",
    image: "rosesarered.jpg",
  }
];

let displayPoems = (array) => {
  let html = "";
  let poemDiv = document.getElementById("poems");

  poemArray = array.forEach((poem) => {
    html += `
    <div class="poem">
        <img class="poem__image" src="./assets/${poem.image}"/>
        <div class="poem__author">
            Author: ${poem.author}
        </div>
        <div class="poem__content">
            ${poem.poem}
        </div>
    </div>
    `;
  });

  poemDiv.innerHTML = html;
};

displayPoems(poems);
