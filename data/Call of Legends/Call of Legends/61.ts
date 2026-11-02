import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		de: "Karpador"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [129],

	hp: 30,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Splash",
				fr: "Trempette",
				de: "Platscher"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	description: {
		en: "For no reason, it jumps and splashes about, making it easy for predators like Pidgeotto to catch it mid-jump.",
		de: "Es springt grundlos in die Luft. Das macht es einfach für Räuber wie TAUBOGA, es im Sprung zu fangen."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87035,
				cardmarket: 279704
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87035,
				cardmarket: 279704
			},
		},
	],

}

export default card
