import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor",
		'de-de': "Biditza"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [399],

	hp: 60,

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
				'en-us': "Whimsy Tackle",
				'fr-fr': "Charge capricieuse",
				'de-de': "Launischer Tackle"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
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
	retreat: 2,

	description: {
		'en-us': "A comparison revealed that Bidoof's front teeth grow at the same rate as Rattata's."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83828,
				cardmarket: 278782
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278782,
				tcgplayer: 83828
			}
		},
	],

}

export default card
