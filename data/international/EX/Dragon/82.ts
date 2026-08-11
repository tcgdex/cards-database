import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Balloon Berry",
		'fr-fr': "Baie Ballon",
		'de-de': "Ballonbeere"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		'en-us': "Attach Balloon Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. When the Pokémon Balloon Berry is attached to retreats, discard Balloon Berry instead of discarding Energy cards.",
		'fr-fr': "Attachez Baie Ballon à un de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la.\n\nLorsque le Pokémon auquel Baie Ballon est attachée bat en retraite, défaussez Baie Ballon plutôt que de défausser des cartes Énergie.",
		'de-de': "When the Pokémon Balloon Berry is attached to retreats, discard Balloon Berry instead of discarding Energy cards."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83708,
				cardmarket: 275959
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83708,
				cardmarket: 275959
			},
		},
	],

}

export default card
