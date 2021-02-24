import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Loudred",
		fr: "Ramboum",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		294,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Whismur",
		fr: "Chuchmur",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Kick",
				fr: "Coud'pattes",
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stomp Off",
				fr: "Trépignement",
			},
			effect: {
				en: "Discard the top card from your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
