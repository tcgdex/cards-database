import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Golurk",
		fr: "Golemastoc",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		623,
	],
	hp: 130,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Hammer Arm",
				fr: "Marto-Poing",
			},
			effect: {
				en: "Discard the top card of your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane Punch",
				fr: "Poing Ouragan",
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
