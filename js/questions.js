var quest=[
{
q:"Krishna was born in:",
o:["Bhadra Krishna Astami","Bhadra Shukla Astami","Shrawan Krishna Astami","Shrawan Sukla Astami"],
a:0,
ae:`Krishna was born in Bhadra Krishna Astami also known as Krishna Janmasthami.`
},
{
q:"Who was the guru of Krishna?",
o:["Agastya","Bishwamitra","Sandipani","Balarama"],
a:2,
ae:`<a href="https://en.wikipedia.org/wiki/Sandipani" target="_blank">Sandipani Muni</a> was the teacher of Krishna, Balarama ,and Sudaama.`
},

{
q:"Which incarnation of Mahavishnu was Krishna?",
o:["5<sup>th</sup>","3<sup>rd</sup>","4<sup>th</sup>","7<sup>th</sup>"],
a:3,
ae:`He was the seventh Avatar of Vishu after Rama.`
},

{
q:"Legends of Krishna are <i><b>mainly</b></i> stored in:",
o:["Bhagvad Gita","Srimad Bhagvatam","Rigved","Manusmriti"],
a:1,
ae:`Shrimad Bhagvat written by Ved Vyasa is also known as Bhagvata Purana. It contains many stories of Krishna.`
},

{
q:"Krishna was married to:",
o:["Radha","Tulasi","Sita","Rukmini"],
a:3,
ae:`Though Krishna is widely referred with Radha, He was married to Rukmini.`
},

{
q:"Who was maternal grandfather of Krishna?",
o:["Kamsa","Basudev","Ugrasen","Bhisma"],
a:2,
ae:`Ugrasen was King of Mathura before and after Kamsa. He was the father of Kamsa.`
}
];
var questions=shuffle(quest);
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
