import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Aromatisse",
		fr: "Cocotine",
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		683,
	],
	hp: 90,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Spritzee",
		fr: "Fluvetin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dizzying Cologne",
				fr: "Arôme Enivrant",
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Pokémon-EX, this attack does 40 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
