import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Avalugg",
		fr: "Séracrawl",
	},
	illustrator: "sowsow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		713,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Bergmite",
		fr: "Grelaçon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frozen Ground",
				fr: "Terrain Gelé",
			},
			effect: {
				en: "Your opponent can't play any Stadium cards from their hand during their next turn.",
				fr: "Votre adversaire ne peut pas jouer de carte Stade de sa main pendant son prochain tour.",
			},
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Skull Bash",
				fr: "Coud’Krâne",
			},

			damage: 100,

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
