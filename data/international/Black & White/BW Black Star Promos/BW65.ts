import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		39,
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
				'en-us': "Continuous Tumble",
				'fr-fr': "Roulade Continue",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "When it wavers its big, round eyes, it begins singing a lullaby that makes everyone drowsy.",
	},
}

export default card
