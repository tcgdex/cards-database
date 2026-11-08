import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Zapdos ex",
		'fr-fr': "Electhor ex"
	},
	illustrator: "K. Hoshiba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		145,
	],
	hp: 100,
	types: [
		"Lightning",
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
				'en-us': "As long as you have Articuno ex and Moltres ex in play, the Retreat Cost for Zapdos ex is 0.",
				'fr-fr': "Tant qu'Artikodin ex et Sulfura ex sont en jeu, le Coût de retraite d'Electhor ex est de 0."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Thunder Gift",
				'fr-fr': "Cadeau de tonnerre"
			},
			effect: {
				'en-us': "You may move a Lightning Energy card attached to Zapdos ex to 1 of your Pokémon.",
				'fr-fr': "Vous pouvez déplacer 1 carte Énergie  attachée à Electhor ex vers 1 de vos Pokémon."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Wing",
				'fr-fr': "Aile éclair"
			},
			effect: {
				'en-us': "Does 10 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 1 des Pokémon de votre Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 90724
			}
		}
	]

}

export default card
