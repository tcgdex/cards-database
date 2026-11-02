import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

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
		de: "Entferne 2 Schadensmarken von 1 deiner Pokémon (1 falls dieses Pokémon nur 1 hat)."
	},

	trainerType: "Item",
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275774,
				tcgplayer: 88335
			}
		},
	],

}

export default card
