import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Lugia",
		fr: "Lugia",
		de: "Lugia"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aeroblast",
				fr: "Aeroblast",
				de: "Aeroblast"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage plus 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				de: "Flip 2 coins. This attack does 20 damage plus 20 more damage for each heads."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276675,
		tcgplayer: 86906
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["pokemon-rocks-america"]
		}
	]
}

export default card
