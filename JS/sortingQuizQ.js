let q = [
    {
      "question": "Dawn or dusk?",
      "answers": [
        "Dawn",
        "Dusk"
        ],
      "answerValues": [
        [0.5,0.5,0,0],
        [0,0,0.5,0.5]
      ]
    },
    {
      "question": "Forest or River?",
      "answers": [
        "Forest",
        "River"
        ],
      "answerValues": [
        [0.5,0.5,0,0],
        [0,0,0.5,0.5]
      ]
    },
    {
      "question": "Moon or Stars?",
      "answers": [
        "Moon",
        "Stars"
        ],
      "answerValues": [
        [0,0.5,0,0.5],
        [0.5,0,0.5,0]
      ]
    },
    {
      "question": "Which of the following would you most hate people to call you?",
      "answers": [
        "Ordinary",
        "Ignorant",
        "Cowardly",
        "Selfish"
        ],
      "answerValues": [
        [0,0,0,1],
        [0,1,0,0],
        [1,0,0,0],
        [0,0,1,0]
      ]
    },
    {
      "question": "After you have died, what would you most like people to do when they hear your name?",
      "answers": [
        "Miss you, but smile.",
        "Ask for more stories about your adventures!",
        "Think with admiration of your achievements.",
        "I don't care what people think of me when I'm dead, it's what they think of me while I'm alive that counts."
        ],
      "answerValues": [
        [0,0,1,0],
        [1,0,0,0],
        [0,1,0,0],
        [0,0,0,1]
      ]
    },
    {
      "question": "How would you like to be known to history?",
      "answers":[
        "The Wise",
        "The Good",
        "The Great",
        "The Bold"
      ],
      "answerValues": [
        [0,1,0,0],
        [0,0,1,0],
        [0,0,0,1],
        [1,0,0,0]
      ]
    },
    {
      "question": "Given the choice, would you rather invent a potion that guarenteed you:",
      "answers": [
        "Love?",
        "Glory?",
        "Wisdom?",
        "Power"
      ],
      "answerValues": [
        [0,0,1,0],
        [1,0,0,0],
        [0,1,0,0],
        [0,0,0,1]
      ]
    },
    {
      "question": "Once every century, the Flutterby bush produces flowers that adapt their scent to attract the unwary. If it lured you, it would smell of:",
      "answers": [
        "A crackling log fire",
        "The sea",
        "Fresh parchment",
        "Home"
      ],
      "answerValues": [
        [1,0,0,0],
        [0,0,0,1],
        [0,1,0,0],
        [0,0,1,0]
      ]
    },
    {
      "question": "Four goblets are placed before you. Which would you choose to drink?",
      "answers": [
        "The foaming, frothing, silvery liquid that sparkles as though containing ground diamonds.",
        "The smooth, thick, richly purple drink that gives off a delicious smell of chocolate and plums.",
        "The golden liquid so bright that it hurts the eye, and which makes sunspots dance all around the room.",
        "The mysterious black liquid that gleams like ink, and gives off fumes that make you see strange visions."
      ],
      "answerValues": [
        [0,1,0,0],
        [0,0,1,0],
        [1,0,0,0],
        [0,0,0,1]
      ]
    },
    {
      "question": "What kind of instrument most pleases your ear?",
      "answers": [
        "Violin",
        "Trumpet",
        "Piano",
        "Drum"
      ],
      "answerValues": [
        [0,0,0,1],
        [0,0,1,0],
        [0,1,0,0],
        [1,0,0,0]
      ]
    },
    {
      "question": "You enter an enchanted garden. What would you be most curious to examine first?",
      "answers": [
        "The silver leafed tree bearing golden apples",
        "The fat red toadstools that appear to be talking to each other",
        "The bubbling pool, in the depths of which something luminous is swirling",
        "The statue of an old wizard with a strangely twinkling eye"
      ],
      "answerValues": [
        [0,1,0,0],
        [0,0,1,0],
        [0,0,0,1],
        [1,0,0,0]
      ]
    },
    {
      "question": "Four boxes are placed before you. Which would you try and open?",
      "answers": [
        "The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.",
        "The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.",
        "The ornate golden casket, standing on clawed feet, whose inscription warns that both secret knowledge and unbearable temptation lie within.",
        "The small pewter box, unassuming and plain, with a scratched message upon it that reads ‘I open only for the worthy.'"
      ],
      "answerValues" : [
        [0,0,1,0],
        [0,0,0,1],
        [0,1,0,0],
        [1,0,0,0]
      ]
    },
    {
      "question": "A troll has gone beserk in the Headmaster's study at Hogwarts. It is about to smash, crush and tear several irreplaceable items and treasures. In which order would you rescue these objects from the troll's club, if you could?",
      "answers": [
        "First, a nearly perfected cure for dragon pox. Then student records going back 1000 years. Finally, a mysterious handwritten book full of strange runes.",
        "First, student records going back 1000 years. Then a mysterious handwritten book full of strange runes. Finally, a nearly perfected cure for dragon pox.",
        "First, a mysterious handwritten book full of strange runes. Then a nearly perfected cure for dragon pox. Finally, student records going back 1000 years.",
        "First, a nearly perfected cure for dragon pox. Then a mysterious handwritten book full of strange runes. Finally, student records going back 1000 years.",
        "First student records going back 1000 years. Then, a nearly perfected cure for dragon pox. Finally, a mysterious handwritten book full of strange runes.",
        "First, a mysterious handwritten book full of strange runes. Then student records going back 1000 years. Finally, a nearly perfected cure for dragon pox."
      ],
      "answerValues": [
        [0.5,0,0.5,0],
        [0,0,0,1],
        [0,1,0,0],
        [1,0,0,0],
        [0,0,1,0],
        [0,0.5,0,0.5]
      ]
    },
    {
      "question": "Which of the following do you find most difficult to deal with?",
      "answers": [
        "Hunger",
        "Cold",
        "Loneliness",
        "Boredom",
        "Being Ignored"
      ],
      "answerValues": [
        [0,0.5,0.5,0],
        [0,0,0.5,0.5],
        [0.5,0,0.5,0],
        [0.5,0,0,0.5],
        [0,0.5,0,0.5]
      ]
    },
    {
      "question": "Which would you rather be:",
      "answers": [
        "Envied?",
        "Imitated?",
        "Trusted?",
        "Praised?",
        "Liked?",
        "Feared?"
      ],
      "answerValues": [
        [0,0.5,0,0.5],
        [0,1,0,0],
        [0.5,0,0.5,0],
        [0.67,0,0,0.33],
        [0,0,1,0],
        [0,0,0,1]
      ]
    },
    {
      "question": "If you could have any power, which would you choose?",
      "answers": [
        "The power to read minds",
        "The power of invisibility",
        "The power of superhuman strength",
        "The power to speak to animals",
        "The power to change the past",
        "The power to change your appearance at will"
      ],
      "answerValues": [
        [0,0.5,0,0.5],
        [0.67,0,0.33,0],
        [0,0,0.67,0.33],
        [0,0.5,0.5,0],
        [0.33,0,0,0.67],
        [0.33,0.67,0,0]
      ]
    },
    {
      "question": "What are you most looking forward to learning at Hogwarts?",
      "answers": [
        "Apparition and Disapparition (being able to materialize and dematerialize at will)",
        "Transfiguration (turning one object into another object)",
        "Flying on a broomstick",
        "Hexes and jinxes",
        "All about magical creatures, and how to befriend/care for them",
        "Secrets about the castle",
        "Every area of magic I can"
      ],
      "answerValues": [
        [0.5,0,0,0.5],
        [0,1,0,0],
        [0.5,0,0.5,0],
        [0,0,0,1],
        [0,0,1,0],
        [1,0,0,0],
        [0,1,0,0]
      ]
    },
    {
      "question": "Which of the following would you most like to study?",
      "answers": [
        "Centaurs",
        "Goblins",
        "Merpeople",
        "Ghosts",
        "Vampires",
        "Werewolves",
        "Trolls"
      ],
      "answerValues": [
        [0.5,0.5,0,0],
        [0,0.67,0,0.33],
        [0,0,0.5,0.5],
        [0.5,0.5,0,0],
        [0,0,0,1],
        [0.5,0,0.5,0],
        [0,0,0.5,0.5]
      ]
    },
    {
      "question": "You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:",
      "answers": [
        "Attempt to confuse the troll into letting all three of you pass without fighting?",
        "Suggest drawing lots to decide which of you will fight?",
        "Suggest that all three of you should fight (without telling the troll)?",
        "Volunteer to fight?"
      ],
      "answerValues": [
        [0,1,0,0],
        [0,0,1,0],
        [0,0,0,1],
        [1,0,0,0]
      ]
    }, {
      "question": "One of your house mates has cheated in a Hogwarts exam by using a Self-Spelling Quill. Now he has come top of the class in Charms, beating you into second place. Professor Flitwick is suspicious of what happened. He draws you to one side after his lesson and asks you whether or not your classmate used a forbidden quill. What do you do?",
      "answers": [
        "Lie and say you don't know (but hope that somebody else tells Professor Flitwick the truth).",
        "Tell Professor Flitwick that he ought to ask your classmate (and resolve to tell your classmate that if he doesn't tell the truth, you will).",
        "Tell Professor Flitwick the truth. If your classmate is prepared to win by cheating, he deserves to be found out. Also, as you are both in the same house, any points he loses will be regained by you, for coming first in his place.",
        "You would not wait to be asked to tell Professor Flitwick the truth. If you knew that somebody was using a forbidden quill, you would tell the teacher before the exam started."
      ],
      "answerValues": [
        [0,0,1,0],
        [1,0,0,0],
        [0,1,0,0],
        [0,0,0,1]
      ]
    },
    {
      "question": "A Muggle confronts you and says that they are sure you are a witch or wizard. Do you:",
      "answers": [
        "Ask what makes them think so?",
        "Agree, and ask whether they'd like a free sample of a jinx?",
        "Agree, and walk away, leaving them to wonder whether you are bluffing?",
        "Tell them that you are worried about their mental health, and offer to call a doctor."
      ],
      "answerValues": [
        [0,1,0,0],
        [0,0,0,1],
        [1,0,0,0],
        [0,0,1,0]
      ]
    },
    {
      "question": "Which nightmare would frighten you most?",
      "answers": [
        "Standing on top of something very high and realizing suddenly that there are no hand- or footholds, nor any barrier to stop you falling.",
        "An eye at the keyhole of the dark, windowless room in which you are locked.",
        "Waking up to find that neither your friends nor your family have any idea who you are.",
        "Being forced to speak in such a silly voice that hardly anyone can understand you, and everyone laughs at you."
      ],
      "answerValues": [
        [0,1,0,0],
        [1,0,0,0],
        [0,0,1,0],
        [0,0,0,1]
      ]
    },
    {
      "question": "Which road tempts you most?",
      "answers": [
        "The wide, sunny, grassy lane",
        "The narrow, dark, lantern-lit alley",
        "The twisting, leaf-strewn path through woods",
        "The cobbled street lined with ancient buildings"
      ],
      "answerValues": [
        [0,0,1,0],
        [0,0,0,1],
        [1,0,0,0],
        [0,1,0,0]
      ]
    },
    {
      "question": "Late at night, walking alone down the street, you hear a peculiar cry that you believe to have a magical source. Do you:",
      "answers": [
        "Proceed with caution, keeping one hand on your concealed wand and an eye out for any disturbance?",
        "Draw your wand and try to discover the source of the noise?",
        "Draw your wand and stand your ground?",
        "Withdraw into the shadows to await developments, while mentally reviewing the most appropriate defensive and offensive spells, should trouble occur?"
      ],
      "answerValues": [
        [0,0,1,0],
        [1,0,0,0],
        [0,0,0,1],
        [0,1,0,0]
      ]
    },
    {
      "question": "If you were attending Hogwarts, which pet would you choose to take with you?",
      "answers": [
        "Tabby cat",
        "Siamese cat",
        "Ginger cat",
        "Black cat",
        "White cat",
        "Tawny owl",
        "Screech owl",
        "Brown owl",
        "Snowy owl",
        "Barn owl",
        "Common toad",
        "Natterjack toad",
        "Dragon toad",
        "Harlequin toad",
        "Three toed tree toad"
      ],
      "answerValues": [
        [0.5,0,0,0.5],
        [0.2,0,0,0.8],
        [0.2,0,0,0.8],
        [0.2,0,0,0.8],
        [0.2,0,0,0.8],
        [0.2,0.8,0,0],
        [0.2,0.8,0,0],
        [0.2,0.8,0,0],
        [0.2,0.4,0.4,0],
        [0.2,0.8,0,0],
        [0.2,0,0.8,0],
        [0.2,0,0.8,0],
        [0.5,0,0.5,0],
        [0.2,0,0.8,0],
        [0.2,0.4,0.4,0]
      ]
    },
    {
      "question": "Black or white?",
      "answers": [
        "Black",
        "White"
      ],
      "answerValues": [
        [0.5,0,0,0.5],
        [0,0.5,0.5,0]
      ]
    },
    {
      "question": "Heads or Tails?",
      "answers": [
        "Heads",
        "Tails"
      ],
      "answerValues": [
        [0,0.5,0.5,0],
        [0.5,0,0,0.5]
      ]
    },
    {
      "question": "Left or Right?",
      "answers": [
        "Left",
        "Right"
      ],
      "answerValues": [
        [0,0.5,0,0.5],
        [0.5,0,0.5,0]
      ]
    }
  ]
