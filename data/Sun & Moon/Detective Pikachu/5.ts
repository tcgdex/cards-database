import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
	},
	illustrator: undefined,
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 180,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 70,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Tackle",
				fr: "Tacle Brutal",
			},
			effect: {
				en: "This Pokémon does 50 damage to itself.",
				fr: "Ce Pokémon s’inflige 50 dégâts.",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
