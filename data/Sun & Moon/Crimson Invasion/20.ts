import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Piloswine",
		fr: "Cochignon",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		221,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Swinub",
		fr: "Marcacrin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Stampede",
				fr: "Ruée",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rest",
				fr: "Repos",
			},
			effect: {
				en: "This Pokémon is now Asleep. Heal 90 damage from it.",
				fr: "Ce Pokémon est maintenant Endormi. Soignez 90 dégâts à ce Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
