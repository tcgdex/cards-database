import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Latias ☆",
		'fr-fr': "Latias ☆",
		'de-de': "Latias ☆"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		380,
	],

	hp: 80,

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
				'en-us': "Miraculous Light",
				'fr-fr': "Lumière soignante",
				'de-de': "Healing Light"
			},
			effect: {
				'en-us': "Remove 1 damage counter from each of your Pokémon (including Latias ☆).",
				'fr-fr': "Retirez 1 marqueur de dégât à chacun de vos Pokémon (Latias ☆ inclus).",
				'de-de': "Remove 1 damage counter from each of your Pokémon (including Latias ☆)."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Psychic",
			],
			name: {
				'en-us': "Shooting Star",
				'fr-fr': "Étoile filante",
				'de-de': "Shooting Star"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, discard all Energy cards attached to Latias ☆ and this attack does 50 damage plus 100 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, défaussez toutes les cartes Énergie attachées à Latias ☆. Cette attaque inflige 50 dégâts plus 100 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is Pokémon-ex, dicard all Energy cards attached to Latias ☆ and this attack does 50 damage plus 100 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86658
			},
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"],
			thirdParty: {
				tcgplayer: 86658
			},
		},
	],

}

export default card
