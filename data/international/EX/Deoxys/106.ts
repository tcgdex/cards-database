import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Latios ☆",
		'fr-fr': "Latios ☆",
		'de-de': "Latios ☆"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
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
				'fr-fr': "Lumière miraculeuse",
				'de-de': "Miraculous Light"
			},
			effect: {
				'en-us': "Remove 1 damage counter and all Special Conditions from Latios ☆.",
				'fr-fr': "Retirez à Latios ☆ 1 marqueur de dégât et tous ses États Spéciaux.",
				'de-de': "Remove 1 damage counter and all Special Conditiones from Latios ☆."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Psychic",
			],
			name: {
				'en-us': "Shining Star",
				'fr-fr': "Étoile brillante",
				'de-de': "Shining Star"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Stage 2 Evolved Pokémon, discard all Energy cards attached to Latios ☆ and this attack does 50 damage plus 100 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolué de niveau 2, défaussez toutes les cartes Énergie attachées à Latios ☆. Cette attaque inflige 50 dégâts plus 100 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is a Stage 2 Evolved Pokémon, discard all Energy cards attached to Latios ☆ and this attack does 50 damage plus 100 more damage."
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
			type: "Grass",
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
				tcgplayer: 86672
			},
		},
	],

}

export default card
