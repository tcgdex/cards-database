import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Farfetch'd",
		'fr-fr': "Canarticho",
		'de-de': "Porenta"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		83,
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
				'en-us': "Swords Dance",
				'fr-fr': "Danse-lames",
				'de-de': "Schwerttanz"
			},
			effect: {
				'en-us': "During your next turn, Farfetch'd's Leek Slap attack's base damage is 60.",
				'fr-fr': "Lors de votre prochain tour, les dégâts de base de l'attaque Coup d'oignon de Canarticho sont de 60.",
				'de-de': "In deinem nächsten Zug beträgt der Grundschaden des Angriffs Lauchschlag 60 Schadenspunkte."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Leek Slap",
				'fr-fr': "Coup d'oignon",
				'de-de': "Lauchschlag"
			},
			effect: {
				'en-us': "During your next turn, Farfetch'd can't use Leek Slap.",
				'fr-fr': "Lors de votre prochain tour, Canarticho ne peut pas utiliser Coup d'poireau.",
				'de-de': "Porenta kann Lauchschlag in deinem nächsten Zug nicht einsetzen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can't live without the stalk it holds. That's why it defends the stalk from attackers with its life.",
	},

	thirdParty: {
		cardmarket: 277802,
		tcgplayer: 85386
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
