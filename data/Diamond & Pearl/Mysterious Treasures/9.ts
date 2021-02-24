import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Garchomp",
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Gabite",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rainbow Scale",
			},
			effect: {
				en: "If an Active Pokémon has Weakness to any of the types of Energy attached to Garchomp, Garchomp's attacks do 40 more damage to that Pokémon (before applying Weakness and Resistance). Rainbow Scale Poké-Body can't be used if Garchomp has any Special Energy cards attached to it.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Fang",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+30"
		},
	],





}

export default card
