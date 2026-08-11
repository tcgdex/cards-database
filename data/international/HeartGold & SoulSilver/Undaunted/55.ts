import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita",
		'de-de': "Makuhita"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [296],

	hp: 70,

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
				'en-us': "Slap Down",
				'fr-fr': "Écraser",
				'de-de': "Niederschlag"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage plus 10 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque côté face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slap Push",
				'fr-fr': "Gifle",
				'de-de': "Stoß"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It toughens up by slamming into thick trees over and over. It gains a sturdy body and dauntless spirit."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279308,
				tcgplayer: 87133
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279308,
				tcgplayer: 87133
			}
		}
	],

}

export default card
