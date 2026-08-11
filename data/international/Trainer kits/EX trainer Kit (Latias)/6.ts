import { Card } from 'models/database/card'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [300],
	set: Set,

	name: {
		'en-us': "Skitty",
		'fr-fr': "Skitty"
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
			'en-us': "Tackle",
			'fr-fr': "Charge"
		},
		damage: 10
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Lunge",
			'fr-fr': "Coup rapide"
		},
		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, l'attaque est sans effet."
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
