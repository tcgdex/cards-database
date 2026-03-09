import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Memory Berry",
		fr: "Baie de mémoire",
		de: "Erinnerungsbeere"
	},

	illustrator: "Shizurow",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Baie de mémoire à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la.",
		de: "The Pokémon this card is attached to can use any attack from its Basic Pokémon or its Stage 1 Evolution card. (You still have to pay for that attack's Energy cost.)"
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 278531,
		tcgplayer: 87306
	},

	variants:[
		{
			type:"normal"
		},
		{
			type:"reverse"
		},
		{
			type:"normal",
			stamp: ["david-cohen"]
		}
	]
}

export default card
