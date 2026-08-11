import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Shuckle",
		'fr-fr': "Caratroc",
		'de-de': "Pottrott"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [213],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Shell Barricade",
				'fr-fr': "Coquille barricade",
				'de-de': "Panzersperre"
			},
			effect: {
				'en-us': "As long as Shuckle is on your Bench, prevent all damage done to Shuckle by attacks (both yours and your opponent's).",
				'fr-fr': "Tant que Caratroc est sur le Banc, prévenez tous les dégâts infligés à Caratroc par des attaques (les vôtres et celles de votre adversaire).",
				'de-de': "Solange sich Pottrott auf deiner Bank befindet, verhindere allen Schaden, der Pottrott durch Angriffe (deine oder die deines Gegners) zugefügt würde."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Poison Jab",
				'fr-fr': "Direct Toxik",
				'de-de': "Gifthieb"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergifet."
			},
			damage: 30,

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
		'en-us': "The berries it stores in its vase-like shell decompose and become a gooey liquid."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89192,
				cardmarket: 278983
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89192,
				cardmarket: 278983
			}
		},
	],

}

export default card
