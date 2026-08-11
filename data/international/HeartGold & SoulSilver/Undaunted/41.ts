import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Vaporeon",
		'fr-fr': "Aquali",
		'de-de': "Aquana"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [134],

	hp: 90,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spiral Drain",
				'fr-fr': "Spirale épuisante",
				'de-de': "Spiralsauger"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Vaporeon.",
				'fr-fr': "Retirez 2 marqueurs de dégât à Aquali.",
				'de-de': "Entferne 2 Schadensmarken von Aquana."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Dual Splash",
				'fr-fr': "Double splash",
				'de-de': "Doppelplatscher"
			},
			effect: {
				'en-us': "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 2 des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à chacun d’entre eux. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 2 Pokémon deines Gegners. Dieser Angriff fügt jedem der gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When Vaporeon’s fins begin to vibrate, it is a sign that rain will come within a few hours."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279294,
				tcgplayer: 90286
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279294,
				tcgplayer: 90286
			}
		}
	],

}

export default card
