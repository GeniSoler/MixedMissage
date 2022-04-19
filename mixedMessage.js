// The program will provide 3 random sentence of The ugly duckling, the three little pigs and The Red Riging Hood.

const redRidingHood = ["Once upon a time, there lived a little girl called Little Red Riding Hood.", 
"She wore a beautiful red cape that her grandma had made for her.", 
"One day, her mother said, 'Come here Little Red Riding Hood. Your grandma is not very well. I would like you to take this bread and cheese to her but remember to stay on the path.'", 
"Little Red Riding Hood set off to her grandma’s house. She lived on the other side of a forest.", 
"As Little Red Riding Hood was going through the wood, she met a wolf.", 
"He was waiting for her to get closer and closer and closer and then…. he jumped out from behind a tree!"]

const threePigs = ["Once upon a time, there were three little pigs.", 
" The pigs lived in a small house with their mum.", 
"One day, their mum sent them off to build houses of their own.", 
"As they walked down the road, the first little pig met a farmer pulling a cart of straw.", 
" It looked very warm - just right for building a house. He asked if he could have some", 
"The farmer agreed and the first little pig began to build his straw house."]

const goldilocks = ["Once upon a time lived Goldilocks and The Three Bears.", 
"One day, Goldilocks went for a walk in the forest and found a house.", 
"She knocked, and when nobody answered, she decided to go inside.", 
"At the table, there were three bowls of porridge. Goldilocks was hungry.", 
"She tasted the porridge from the large bowl. 'This porridge is too salty!' she said.", 
"She tasted the porridge from the medium sized bowl. 'This porridge is too sweet!' she said.", 
"She tasted the porridge from the small bowl. 'This porridge is just right,' she said and she ate it all up.", 
"Goldilocks felt tired, so she walked into the living room and saw three chairs.", 
"She sat in the large chair to rest her feet. 'This chair is too big!' she said.", 
"She sat in the medium sized chair. 'This chair is too big, too!' she said.", 
"She sat in the small chair. 'This chair is just right,' she sighed.", 
"Just as Goldilocks settled down into the chair to rest, it broke into pieces!", 
"By now, Goldilocks was very tired, so she went upstairs to the bedroom.", 
"She lay down on the large bed. 'This bed is too hard!' she said.", 
"She lay down on the medium sized bed. 'This bed is too soft!' she said.", 
"She lay down on the small bed. 'This bed is just right,' she sighed. She curled up and fell asleep.", 
"As she was sleeping, The Three Bears came home.", 
"'Someone’s been eating my porridge,' growled Daddy Bear.", 
"'Someone’s been eating my porridge,' said Mummy Bear.", 
"'Someone’s been eating my porridge and it’s all gone!' cried Baby Bear.", 
"'Someone’s been sitting in my chair! growled Daddy Bear.", 
"'Someone’s been sitting in my chair!' said Mummy Bear.", 
"'Someone’s been sitting in my chair and it’s broken!' cried Baby Bear.", 
"When they got upstairs to the bedroom, Daddy Bear growled, 'Someone’s been sleeping on my bed.'", 
"'Someone’s been sleeping on my bed too,' said the Mummy Bear", 
"'Someone’s been sleeping in my bed, and she’s still there!' cried Baby Bear.", 
"Just then Goldilocks woke up and saw The Three Bears. 'Help!' she screamed.", 
"Goldilocks ran down the stairs and into the forest. And she never went back into the woods again."]

function randomString(book){
    let result = " ";
    for (let i = 0; i < book.length; i++) {
        random = (Math.floor(Math.random() * book.length));
        result = book[random];
    }
    return result;
}
console.log(`Your random text is: ${randomString(threePigs)} ${randomString(redRidingHood)} ${randomString(goldilocks)}`)




