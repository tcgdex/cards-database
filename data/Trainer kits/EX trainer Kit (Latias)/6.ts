import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [300],
	set: Set,

	name: {
		en: "Skitty",
		fr: "Skitty",
		de: "Eneco"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Colorless"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle"
		},
		damage: 10
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Lunge",
			fr: "Coup rapide",
			de: "Ausfall"
		},
		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, l'attaque est sans effet.",
			de: "Wirf eine Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
		},
		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275776,
				tcgplayer: 89263
			}
		},
	],

}

export default card
