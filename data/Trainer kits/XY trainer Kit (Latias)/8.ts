import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	set: Set,

	name: {
		en: "Potion",
		fr: "Énergie Psy",
		es: "Energía Psíquica",
		it: "Energia Psico",
		pt: "Energia Psíquica",
		de: "Psycho-Energie"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	energyType: "Normal",

	effect: {
		en: "Remove 2 damage counters from 1 of your Pokémon (remove 1 damage counter if that Pokémon has only 1)."
	},
	trainerType: "Item",
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88335
			}
		},
	],

}

export default card