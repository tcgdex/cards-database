import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Tympole",
		'fr-fr': "Tritonde",
		'es-es': "Tympole",
		'it-it': "Tympole",
		'pt-br': "Tympole",
		'de-de': "Schallquap"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		535,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Get Loud",
				'fr-fr': "Tapageur",
				'es-es': "Haz Ruido",
				'it-it': "Chiasso",
				'pt-br': "Fazer Barulho",
				'de-de': "Rambazamba"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Round",
				'fr-fr': "Chant Canon",
				'es-es': "Canon",
				'it-it': "Coro",
				'pt-br': "Circular",
				'de-de': "Kanon"
			},
			effect: {
				'en-us': "This attack does 10 damage times the number of your Pokémon that have the Round attack.",
				'fr-fr': "Cette attaque inflige 10 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
				'es-es': "Este ataque hace 10 puntos de daño por cada uno de tus Pokémon que tenga el ataque Canon.",
				'it-it': "Questo attacco infligge 10 danni per ogni tuo Pokémon che conosce l'attacco Coro.",
				'pt-br': "Este ataque causa 10 de danos vezes o número de Pokémon que possuem o ataque Circular.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl deiner Pokémon zu, die Kanon beherrschen."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "By vibrating its cheeks, it emits sound waves imperceptible to humans. It uses the rhythm of these sounds to talk.",
	},

	thirdParty: {
		cardmarket: 288208,
		tcgplayer: 111540
	}
}

export default card
