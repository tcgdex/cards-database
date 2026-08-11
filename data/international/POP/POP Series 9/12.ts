import { Card } from 'models/database/card'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [427],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dizzy Punch",
				'fr-fr': "Uppercut"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Defense Curl",
				'fr-fr': "Boul'Armure"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Buneary by attacks during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à Laporeille lors du prochain tour de votre adversaire."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	description: {
		'en-us': "When it senses danger, it perks up its ears. On cold nights, it sleeps with its head tucked into its fur.",
		'fr-fr': "Il dresse les oreilles quand il sent le danger. Il dort la tête dans sa fourrure pendant les nuits froides."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84042,
				cardmarket: 278563
			},
		},
	],

}

export default card
