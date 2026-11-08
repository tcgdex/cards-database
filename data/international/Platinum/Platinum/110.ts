import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Memory Berry",
		'fr-fr': "Baie de mémoire",
		'de-de': "Erinnerungsbeere"
	},

	illustrator: "Shizurow",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Attach Memory Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. The Pokémon this card is attached to can use any attack from its Basic Pokémon or its Stage 1 Evolution card. (You still have to pay for that attack's Energy cost.)",
		'fr-fr': "Attachez Baie de mémoire à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la.",
		'de-de': "The Pokémon this card is attached to can use any attack from its Basic Pokémon or its Stage 1 Evolution card. (You still have to pay for that attack's Energy cost.)"
	},

	trainerType: "Tool",

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 87306,
				cardmarket: 278531
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278531,
				tcgplayer: 87306
			}
		},
		{
			type:"normal",
			stamp: ["david-cohen"],
			thirdParty: {
				tcgplayer: 479918
			}
		}
	],

	retreat: 0
}

export default card
