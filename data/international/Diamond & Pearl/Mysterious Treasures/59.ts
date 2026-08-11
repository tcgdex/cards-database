import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'de-de': "Pupitar"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pressurized Gas",
				'fr-fr': "Gaz pressurisé",
				'de-de': "Treibgas"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt allen Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rocket Tackle",
				'fr-fr': "Lance roquette",
				'de-de': "Raketenstart"
			},
			effect: {
				'en-us': "Pupitar does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Pupitar by attacks during your opponent's next turn.",
				'fr-fr': "Ymphect s'inflige 10 dégâts. Lancez une pièce. Si c'est face, prévenez tous les effets infligés à Ymphect par des attaques lors du prochain tour de votre adversaire.",
				'de-de': "Pupitar fügt sich selbst 10 Schadenspunkte zu. Wirf 1 Münze. Bei \"Kopf\" verhindere allen Schaden, der Pupitar im nächsten Zug deines Gegners durch Angriffe zugefügt wird."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	description: {
		'en-us': "Its body is as hard as bedrock. By venting pressurized gas, it can launch itself like a rocket.",
		'fr-fr': "Son corps est dur comme la pierre souterraine. Il file comme une fusée en expulsant des gaz."
	},

	thirdParty: {
		cardmarket: 277688,
		tcgplayer: 88451
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
