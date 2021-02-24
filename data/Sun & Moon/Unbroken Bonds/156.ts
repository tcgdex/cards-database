import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Porygon2",
		fr: "Porygon2",
	},
	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		233,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Porygon",
		fr: "Porygon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Draw",
				fr: "Double Pioche",
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque Tournante",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
