import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Vespiquen",
		'fr-fr': "Apireine",
		'de-de': "Honweisel"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [416],

	hp: 100,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Combee",
		'fr-fr': "Apitrini"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Defense Sign",
				'fr-fr': "Signal de défense",
				'de-de': "Abwehrzeichen"
			},
			effect: {
				'en-us': "Prevent all damage done to your Benched Grass Pokémon by attacks.",
				'fr-fr': "Prévenez tous les dégâts infligés par des attaques aux Pokémon Grass de votre Banc.",
				'de-de': "Verhindere allen Schaden, der -Pokémon auf deiner Bank durch Angriffe zugefügt wird."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mach Wind",
				'fr-fr': "Vent frénétique",
				'de-de': "Stürmische Brise"
			},
			effect: {
				'en-us': "During your next turn, Vespiquen's Retreat Cost is 0.",
				'fr-fr': "Pendant votre prochain tour, le Coût de retraite d’Apireine est de 0.",
				'de-de': "Die Rückzugskosten für Honweisel betragen in deinem nächsten Zug 0."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It raises grubs in the holes in its body. It secretes pheromones to control Combee."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279276,
				tcgplayer: 90329
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279276,
				tcgplayer: 90329
			}
		}
	],

}

export default card
