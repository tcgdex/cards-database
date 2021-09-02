import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Staraptor",
		fr: "Étouraptor",
		es: "Staraptor",
		it: "Staraptor",
		pt: "Staraptor",
		de: "Staraptor"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		398,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Staravia",
		fr: "Étourvol",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-Aile",
			},

			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strong Breeze",
				fr: "Forte Brise",
			},
			effect: {
				en: "Your opponent shuffles the Defending Pokémon and all cards attached to it into his or her deck.",
				fr: "Votre adversaire mélange le Pokémon Défenseur et toutes les cartes qui lui sont attachées avec son deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
