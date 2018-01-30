var app = function() {
addCatsToPage();
}

const catsArray = [
{
  name: "Boba",
  favourite_food: "Sock fluff",
  img: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
},
{
  name: "Barnaby",
  favourite_food: "Tuna",
  img: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"
},
{
  name: "Max",
  favourite_food: "Tuna",
  img: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
}
];

var createCatList = function() {
  let catList = document.createElement('ul');
  catList.className = 'cat';
  return catList;
}

var createCatNameListItem = function(name) {
  let listItem = document.createElement('li');
  listItem.innerText = "Name: " + name;
  return listItem;
}

var createCatFoodListItem = function(food) {
  let listItem = document.createElement('li');
  listItem.innerText = "Favourite food: " + food;
  return listItem;
}

var createCatImageListItem = function(imageSrc) {
  let listItem = document.createElement('li');
  let image = document.createElement('img');
  image.src = imageSrc;
  image.width = 500;
  listItem.appendChild(image);
  return listItem;
}

var createCatImage = function() {
  let catImage = document.createElement('img');
  return catImage;
}

var appendElements = function(cats, cat, catName, catFood, catImage) {
  cat.appendChild(catName);
  cat.appendChild(catFood);
  cat.appendChild(catImage);
  cats.appendChild(cat);
}

var addCat = function(catName, catFood, catImage) {
  var catList = createCatList();
  var catNameListItem = createCatNameListItem(catName);
  var catFoodListItem = createCatFoodListItem(catFood);
  var catImageListItem = createCatImageListItem(catImage);
  var cats = document.querySelector('#cats');
  appendElements(cats, catList, catNameListItem, catFoodListItem, catImageListItem);
}

var addCatsToPage = function() {
  for(cat of catsArray) {
    addCat(cat.name, cat.favourite_food, cat.img);
  }
}

document.addEventListener("DOMContentLoaded", app);