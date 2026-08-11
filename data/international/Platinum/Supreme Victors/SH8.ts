import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Relicanth",
		'fr-fr': "Relicanth",
		'de-de': "Relicanth"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [369],

	hp: 80,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Deep Sea Pressure",
				'fr-fr': "Pression abyssale",
				'de-de': "Tiefseedruck"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon's Retreat Cost is ColorlessColorless more.",
				'fr-fr': "Lors du prochain tour de votre adversaire, le Coût de retraite du Pokémon Défenseur est  de plus.",
				'de-de': "Während des nächsten Zuges deines Gegners sind die Rückzugskosten des Verteidigenden Pokémon um  erhöht."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Wave",
				'fr-fr': "Aqua-vague",
				'de-de': "Aquawelle"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage plus 10 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "A rare Pokémon discovered during a deep-sea exploration. It has not changed in over 100 million years."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88689,
				cardmarket: 278690
			}
		},
	],

}

export default card
