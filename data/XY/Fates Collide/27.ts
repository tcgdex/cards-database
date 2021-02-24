import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Koffing",
		fr: "Smogo",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		109,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Division",
				fr: "Division",
			},
			effect: {
				en: "Search your deck for up to 2 Koffing and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 Smogo dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
