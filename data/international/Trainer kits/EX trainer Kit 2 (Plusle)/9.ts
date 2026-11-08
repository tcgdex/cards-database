import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	name: {
		'en-us': "Potion",
		'fr-fr': "Potion"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "None",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Remove 2 damage counters from 1 of your Pokémon (remove 1 damage counter if that Pokémon has only 1).",
		'fr-fr': "Soignez 30 dégâts à 1 de vos Pokémon."
	},

	trainerType: "Item",
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88339
			}
		},
	],

}

export default card
