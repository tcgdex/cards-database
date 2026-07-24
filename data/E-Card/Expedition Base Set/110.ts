import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Racaillou",
		de: "Kleinstein"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [215],

	hp: 60,

	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rob",
				fr: "Lance-pierre",
				de: "Steinschleuderer"
			},
			effect: {
				en: "Look at your opponent's hand. Choose all Technical Machine and Pokémon Tool cards there and put them into his or her deck. Your opponent shuffles the deck afterward.",
				fr: "N'appliquez pas la Résistance.",
				de: "Wende Resistenz nicht an."
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85686,
				cardmarket: 274985
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
