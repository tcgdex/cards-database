import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Articuno ex",
		'fr-fr': "Artikodin ex"
	},
	illustrator: "Nakaoka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		144,
	],
	hp: 100,
	types: [
		"Water",
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
				'en-us': "As long as you have Zapdos ex and Moltres ex in play, the Retreat Cost for Articuno ex is 0.",
				'fr-fr': "Tant qu'Electhor ex et Sulfura ex sont en jeu, le Coût de retraite d'Artikodin ex est de 0."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ice Gift",
				'fr-fr': "Cadeau de glace"
			},
			effect: {
				'en-us': "You may move a Water Energy card attached to Articuno ex to 1 of your Pokémon.",
				'fr-fr': "Vous pouvez déplacer 1 carte Énergie  attachée à Artikodin ex vers 1 de vos Pokémon."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Freezing Wing",
				'fr-fr': "Aile gelée"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 83655
			}
		},
	]
}

export default card
