import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon",
		de: "Porygon"
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
				en: "Calculate",
				fr: "Calculer",
				de: "Berechnen"
			},
			effect: {
				en: "Look at the top 3 cards of your deck and put them back on top of your deck in any order.",
				fr: "Regardez les 3 cartes du dessus de votre deck et replacez-les au dessus de votre deck dans n'importe quel ordre.",
				de: "Schau dir die obersten 3 Karten deines Decks an und lege sie in beliebiger Reihenfolge auf dein Deck zurück."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharpen",
				fr: "Affûtage",
				de: "Schärfer"
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
