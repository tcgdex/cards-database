import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas Niv. 31",
		'de-de': "Hippopotas"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [449],

	hp: 70,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Push Down",
				'fr-fr': "Renverser",
				'de-de': "Runterdrücken"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Endeavor",
				'fr-fr': "Effort",
				'de-de': "Notsituation"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 2,

	description: {
		'en-us': "It shuts its nostrils tight then travels through sand as if walking. They form colonies of around ten."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278638,
				tcgplayer: 86080
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278638,
				tcgplayer: 86080
			}
		},
	],

}

export default card
