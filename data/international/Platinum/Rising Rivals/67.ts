import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Kecleon",
		'fr-fr': "Kecleon Niv. 34",
		'de-de': "Kecleon"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [352],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Colorful Body",
				'fr-fr': "Corps coloré",
				'de-de': "Farbenfroher Körper"
			},
			effect: {
				'en-us': "Kecleon's type is Grass Fire Water Lightning Psychic Fighting Darkness Metal Colorless.",
				'fr-fr': "Kecleon est de type GrassFireWaterLightningPsychicFightingDarknessMetalColorless.",
				'de-de': "Kecleons Typ ist		 ."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Triple Smash",
				'fr-fr': "Triple éclate",
				'de-de': "Dreifachschmetterer"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It can freely change its body's color. The zigzag pattern on its belly doesn't change, however."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278641,
				tcgplayer: 86431
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278641,
				tcgplayer: 86431
			}
		},
	],

}

export default card
