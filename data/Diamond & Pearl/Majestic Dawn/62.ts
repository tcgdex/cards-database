import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Evoli",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		133,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
			},
			effect: {
				en: "Search your deck for as many Eevee as you like and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck autant d'Evoli que vous le voulez et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lunge",
				fr: "Coup rapide",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
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

	retreat: 1,



}

export default card
