
const words = ['Apple', 'Ant', 'Axe', 'Anchor', 'Antelope', 'Banana', 'Boat', 'Book', 'Bat', 'Ball', 'Cat', 'Car', 'Cup', 'Cap', 'Camera', 'Dog', 'Duck', 'Dress', 'Drum', 'Doll', 'Elephant', 'Egg', 'Eagle', 'Ear', 'Earth', 'Fish', 'Frog', 'Fox', 'Fan', 'Flower', 'Goat', 'Giraffe', 'Gum', 'Glass', 'Gold', 'Hen', 'Hand', 'Hat', 'Hedgehog', 'Hanky', 'Ice', 'Igloo', 'Ink', 'IceCream', 'Iron', 'Jug', 'Joker', 'Jaguar', 'Jellyfish', 'Jurassic', 'Kite', 'King', 'Knife', 'Keyboard', 'Kiwifruit', 'Lamp', 'Lamb', 'Lantern', 'LED', 'Lavender', 'Man', 'Mango', 'Monkey', 'Milk', 'Mozerella', 'Nut', 'Nest', 'Nectar', 'Nose', 'Noodles', 'Oasis', 'Ocean', 'Oatmeal', 'Oregano', 'Ostrich', 'Penguin', 'Panda', 'Paint', 'Pumpkin', 'Polish', 'Quilt', 'Quail', 'Quill', 'Quark', 'Quack', 'Rat', 'Road', 'Ring', 'Rattle', 'Rabbit', 'Salt', 'Star', 'Shoes', 'Shark', 'Ship', 'Tiger', 'Tent', 'Teddy', 'Turnip', 'Tank', 'Umbrella', 'Uncle', 'Umpire', 'Uniform', 'Unicorn', 'Violin', 'Vessel', 'Vacuum', 'Vulture', 'Volcano', 'Wind', 'Wolf', 'Wire', 'Water', 'Wall', 'Xylophone', 'Xray', 'Xerus', 'Xenopus', 'Xynosine', 'Yatch', 'Yarn', 'Yolk', 'Yoyo', 'Yeild', 'Zoo', 'Zebra', 'Zucchini', 'Zip', 'Zest'];

function displayWords(alphabet){
  const filteredWords = words.filter(word => word.charAt(0).toLowerCase() === alphabet.toLowerCase());
  const displayedWords = filteredWords.slice(0, 5);
  const wordElement = document.getElementById('words');

  let list = document.createElement('ol');
  wordElement.innerHTML = '';
  for(let i=0; i<displayedWords.length; i++){
    list.innerHTML += ` <a href="https://www.google.com/search?q=${displayedWords[i]}&oq=${displayedWords[i]}&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAtIBCTE5MzNqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8" target="_blank" > <li class="li"> ${displayedWords[i]} </li> </a> `;

    // list.innerHTML += `<li> <a href="https://www.google.com/search?sca_esv=6e87d5184cf45ead&q=${displayedWords[i]}&uds=ADvngMirhQcxmL5Q3AIuwpvvVY9I2FXJ7HedHnO_fe6EoWn-n26Gi2ao4G8QhGpO9mGkJ6Af1JNovTi0rKEvNP_XQci30QdmvHBMTIrEzREw9mUFKLVHgpq9rcUM82iAMZIXe5LVQPujv8-4ZgNqtRYviZQa0YSXvXtNB0qHnNVT1HMrTd2YfyfFJ5YtGBMvPwnR9KYnnLBZ4wyzEqMSMX3Lax05UtSC9Wlbg779FeW9DbBfDAatgm9W90B6S_vrPJEmt2RphZqmOLwAkwK4V2U2_q_XliSPhg&udm=2&prmd=isvnbz&sa=X&ved=2ahUKEwiXjczftIWGAxXuU6QEHT2RBmMQtKgLegQIDxAB&cshid=1715424164168895&biw=1280&bih=585&dpr=1.5" target="_blank" class="anchor"> ${displayedWords[i]} </a> </li>`;
  }
  wordElement.appendChild(list);
}

function createAlphabetButtons(){
  const alphabetButtons = document.getElementById('alphabet-buttons');
  for(let charCode=65; charCode<=90; charCode++){
    const button = document.createElement('button')
    button.classList.add('buttonStyle');
    const alphabet = String.fromCharCode(charCode);
    button.innerText = alphabet;
    button.dataset.alphabet = alphabet;
    button.addEventListener('click', ()=> displayWords(alphabet));
    alphabetButtons.append(button);
  }
}

createAlphabetButtons()