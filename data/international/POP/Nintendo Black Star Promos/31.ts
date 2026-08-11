import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Moltres ex",
		'fr-fr': "Sulfura ex"
	},
	illustrator: "Ken Ikuji",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		146,
	],
	hp: 100,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Synchronized Lift",
				'fr-fr': "Élévation synchronisée"
			},
			effect: {
				'en-us': "As long as you have Articuno ex and Zapdos ex in play, the Retreat Cost for Moltres ex is 0.",
				'fr-fr': "Tant qu'Artikodin ex et Electhor ex sont en jeu, le Coût de retraite de Sulfura ex est de 0."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flame Gift",
				'fr-fr': "Cadeau de feu"
			},
			effect: {
				'en-us': "You may move a Fire Energy card attached to Moltres ex to 1 of your Pokémon.",
				'fr-fr': "Vous pouvez déplacer 1 carte Énergie  attachée à Sulfura ex vers 1 de vos Pokémon."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Scorching Wing",
				'fr-fr': "Aile brûlante"
			},
			effect: {
				'en-us': "Discard all Fire Energy attached to Moltres ex.",
				'fr-fr': "Défaussez toutes les Énergies  attachées à Sulfura ex."
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 87567
			}
		},
	]

}

export default card
