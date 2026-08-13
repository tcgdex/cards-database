import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	name: {
		en: "Potion",
		fr: "Potion",
		de: "Trank"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "None",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Remove 2 damage counters from 1 of your Pokémon (remove 1 damage counter if that Pokémon has only 1).",
		fr: "Soignez 30 dégâts à 1 de vos Pokémon.",
		de: "Entferne bis zu 2 Schadensmarken von einem Deiner Pokémon."
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
