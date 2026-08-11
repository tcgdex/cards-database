import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
		'de-de': "Larvitar"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [246],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mountain Eater",
				'fr-fr': "Mange-montagne",
				'de-de': "Bergfresser"
			},
			effect: {
				'en-us': "Discard the top card of your opponent's deck. Then, remove 2 damage counters from Larvitar.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire. Ensuite, retirez 2 marqueurs de dégât à Embrylex.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel. Entferne dann 2 Schadensmarken von Larvitar."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque imprudente",
				'de-de': "Waghalsiger Sturmangriff"
			},
			effect: {
				'en-us': "Larvitar does 10 damage to itself.",
				'fr-fr': "Embrylex s’inflige 10 dégâts.",
				'de-de': "Larvitar fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 20,

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

	retreat: 1,

	description: {
		'en-us': "It feeds on soil. After it has eaten a large mountain, it will fall asleep so it can grow."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86644,
				cardmarket: 279206
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86644,
				cardmarket: 279206
			}
		},
	],

}

export default card
