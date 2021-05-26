import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Aipom",
		fr: "Capumain",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		190,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scampering Tail",
				fr: "Queue Fuyante",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put the top card of your opponent's deck on the bottom of their deck without looking at it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer la carte du dessus du deck de votre adversaire en dessous de son deck sans la regarder.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Smack",
				fr: "Coup de Queue",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
