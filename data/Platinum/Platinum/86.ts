import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Poochyena",
		fr: "Medhyena",
		de: "Fiffyen"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		261,
	],
	hp: 50,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Howl",
				fr: "Grondement",
				de: "Howl"
			},
			effect: {
				en: "Search your deck for Poochyena and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez Medhyena dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Search your deck for Poochyena and put it onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Lunge",
				fr: "Coup rapide",
				de: "Lunge"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Flip a coin. If tails, this attack does nothing."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
