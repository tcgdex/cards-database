import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'de-de': "Porygon"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		137,
	],

	hp: 50,

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
				'en-us': "Calculate",
				'fr-fr': "Calculer",
				'de-de': "Berechnen"
			},
			effect: {
				'en-us': "Look at the top 3 cards of your deck and put them back on top of your deck in any order.",
				'fr-fr': "Regardez les 3 cartes du dessus de votre deck et replacez-les au dessus de votre deck dans n'importe quel ordre.",
				'de-de': "Schau dir die obersten 3 Karten deines Decks an und lege sie in beliebiger Reihenfolge auf dein Deck zurück."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sharpen",
				'fr-fr': "Affûtage",
				'de-de': "Schärfer"
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

	retreat: 1,

	description: {
		'en-us': "The world's first artificially created Pokémon. It can travel through electronic space.",
	},

	thirdParty: {
		cardmarket: 277908,
		tcgplayer: 88311
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
