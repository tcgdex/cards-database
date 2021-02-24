import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		11,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shed Skin",
				fr: "Mue",
			},
			effect: {
				en: "Heal 40 damage from this Pokémon.",
				fr: "Soignez 40 dégâts à ce Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
