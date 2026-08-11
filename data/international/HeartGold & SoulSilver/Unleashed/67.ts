import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss",
		'de-de': "Chelast"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [387],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leech Seed",
				'fr-fr': "Vampigraine",
				'de-de': "Egelsamen"
			},
			effect: {
				'en-us': "If this attack does any damage to the Defending Pokémon (after applying Weakness and Resistance), remove 1 damage counter from Turtwig.",
				'fr-fr': "Si cette attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), retirez 1 marqueur de dégât à Tortipouss.",
				'de-de': "Falls dieser Angriff dem Verteidigenden Pokémon Schaden zufügt (nachdem Schwäche und Resistenz verrechnet wurden), entferne 1 Schadensmarke von Chelast."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ramme"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Photosynthesis occurs across its body under the sun. The shell on its back is actually hardened soil."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90080,
				cardmarket: 279223
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90080,
				cardmarket: 279223
			}
		},
	],

}

export default card
