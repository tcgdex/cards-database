import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
		'de-de': "Puppance"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [343],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spinning Attack",
				'fr-fr': "Attaque tournante",
				'de-de': "Rundumangriff"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Turn",
				'fr-fr': "Vif retournement",
				'de-de': "Schnelldrehung"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It moves by spinning on its foot. It is a rare Pokémon that was discovered in ancient ruins."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83717,
				cardmarket: 278780
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278780,
				tcgplayer: 83717
			}
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"],
			thirdParty: {
				cardmarket: 868680,
				tcgplayer: 479998
			}
		}
	],

}

export default card
