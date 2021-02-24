import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		62,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Knuckle Punch",
				fr: "Coud’Phalange",
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swirly Rush",
				fr: "Ruée en Tourbillon",
			},
			effect: {
				en: "If Poliwag and Poliwhirl are on your Bench, this attack does 90 more damage.",
				fr: "Si Ptitard et Têtarte sont sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
