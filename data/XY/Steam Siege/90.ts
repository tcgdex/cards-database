import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Aipom",
		fr: "Capumain",
	},
	illustrator: "Naoki Saito",
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


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fiddle Around",
				fr: "Bidouillage",
			},
			effect: {
				en: "Look at the top 3 cards of your opponent's deck and put them back in any order.",
				fr: "Regardez les 3 cartes du dessus du deck de votre adversaire et replacez-les dans l’ordre de votre choix.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Jab",
				fr: "Coup d’Queue",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
