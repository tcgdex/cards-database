import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Tauros",
		'fr-fr': "Tauros",
		'de-de': "Tauros"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		128,
	],

	hp: 70,

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
				'en-us': "Knock Over",
				'fr-fr': "Culbute",
				'de-de': "Knock Over"
			},
			effect: {
				'en-us': "You may discard any Stadium card in play.",
				'fr-fr': "Vous pouvez défausser n'importe quelle carte Stade en jeu.",
				'de-de': "You may discard any Stadium card in play."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rampage",
				'fr-fr': "Saccage",
				'de-de': "Rampage"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each damage counter on Tauros. After doing damage, flip a coin. If tails, Tauros is now Confused.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Tauros. Après avoir infligé les dégâts, lancez une pièce. Si c'est pile, Tauros est maintenant Confus.",
				'de-de': "Does 20 damage plus 10 damage for each damage counter on Tauros. After doing damage, flip a coin. If tails, Tauros is now Confused."
			},
			damage: "20+",

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
			type: "holo",
			thirdParty: {
				cardmarket: 276192,
				tcgplayer: 89761
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276192,
				tcgplayer: 89761
			},
		}
	]
}

export default card
