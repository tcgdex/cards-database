import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool",
		'de-de': "Bummelz"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [287],

	hp: 40,

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
				'en-us': "Claw",
				'fr-fr': "Mâchoire",
				'de-de': "Claw"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, l'attaque est sans effet.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slack Off",
				'fr-fr': "Paresse",
				'de-de': "Slack Off"
			},
			effect: {
				'en-us': "Remove all damage counters from Slakoth. Slakoth can't attack during your next turn.",
				'fr-fr': "Retirez à Paracool tous ses marqueurs de dégât. Paracool ne pourra pas attaquer pendant votre prochain tour.",
				'de-de': "Remove all damage counters from Slakoth. Slakoth can't attack during your next turn."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275693,
				tcgplayer: 89295
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275693,
				tcgplayer: 89295
			}
		},
	],

}

export default card
