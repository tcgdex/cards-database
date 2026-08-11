import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss",
		'de-de': "Bluzuk"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [48],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leech Life",
				'fr-fr': "Vampirisme",
				'de-de': "Blutsauger"
			},
			effect: {
				'en-us': "Remove from Venonat the number of damage counters equal to the damage you did to the Defending Pokémon.",
				'fr-fr': "Retirez à Mimitoss un nombre de marqueurs de dégât équivalant aux dégâts que vous avez infligés au Pokémon Défenseur.",
				'de-de': "Entferne Schadensmarken von Bluzuk entsprechend der Höhe der Schadenspunkte, die dem Verteidigenden Pokémon durch diesen Angriff zugefügt wurden."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Poison oozes from all over its body. It catches and eats small bugs at night that are attracted by light."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90309,
				cardmarket: 279611
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279611,
				tcgplayer: 90309
			}
		},
	],

}

export default card
