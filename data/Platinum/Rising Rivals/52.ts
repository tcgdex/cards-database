import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Tropius",
		fr: "Tropius Niv. 35",
		de: "Tropius"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		357,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fly",
				fr: "Vol",
				de: "Fliegen"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Tropius during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Tropius lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen. Bei \"Kopf\" verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Tropius zugefügt würden."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Blessed Fruit",
				fr: "Fruit béni",
				de: "Gnadenfrucht"
			},
			effect: {
				en: "Remove all damage counters from 1 of your Benched Grass Pokémon.",
				fr: "Retirez à 1 de vos Pokémon de Banc Grass tous ses marqueurs de dégât.",
				de: "Entferne alle Schadensmarken von 1 -Pokémon auf deiner Bank."
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
				en: "Solarbeam",
				fr: "Lance-soleil",
				de: "Solarstrahl"
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

	thirdParty: {
		cardmarket: 278626,
		tcgplayer: 90060
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		},
		{
			type: "normal",
			stamp: ["pre-release","staff"]
		}
	]
}

export default card
