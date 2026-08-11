import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Tropius",
		'fr-fr': "Tropius Niv. 35",
		'de-de': "Tropius"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [357],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fly",
				'fr-fr': "Vol",
				'de-de': "Fliegen"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Tropius during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Tropius lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen. Bei \"Kopf\" verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Tropius zugefügt würden."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Blessed Fruit",
				'fr-fr': "Fruit béni",
				'de-de': "Gnadenfrucht"
			},
			effect: {
				'en-us': "Remove all damage counters from 1 of your Benched Grass Pokémon.",
				'fr-fr': "Retirez à 1 de vos Pokémon de Banc Grass tous ses marqueurs de dégât.",
				'de-de': "Entferne alle Schadensmarken von 1 -Pokémon auf deiner Bank."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Solarbeam",
				'fr-fr': "Lance-soleil",
				'de-de': "Solarstrahl"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90060,
				cardmarket: 278626
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278626,
				tcgplayer: 90060
			}
		},
		{
			type: "normal",
			stamp: ["pre-release"],
			thirdParty: {
				cardmarket: 882909,
				tcgplayer: 213009
			}
		},
		{
			type: "normal",
			stamp: ["pre-release", "staff"],
			thirdParty: {
				tcgplayer: 228597
			}
		}
	],

}

export default card
