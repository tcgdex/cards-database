import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'de-de': "Chaneira"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [113],

	hp: 90,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras’face",
				'de-de': "Pfund"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Happy Punch",
				'fr-fr': "Coup d’joie",
				'de-de': "Freudenschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, remove 3 damage counters from Chansey.",
				'fr-fr': "Lancez une pièce. Si c’est face, retirez 3 marqueurs de dégâts de Leveinard.",
				'de-de': "Wirf eine Münze. Entferne bei \"Kopf\" 3 Schadensmarken von Chaneira."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It walks carefully to prevent its egg from breaking. However, it is extremely fast at running away."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84177,
				cardmarket: 279030
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84177,
				cardmarket: 279030
			}
		},
		{
			type: "normal",
			stamp: ["ross-cawthorn"],
			thirdParty: {
				tcgplayer: 480359,
				cardmarket: 279030
			}
		},
	],

}

export default card
