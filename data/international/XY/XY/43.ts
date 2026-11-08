import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'pt-br': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Circle Circuit",
				'fr-fr': "Cercle Électrik",
				'es-es': "Circuito Circular",
				'it-it': "Elettroruota",
				'pt-br': "Circuito Circular",
				'de-de': "Rundparcours"
			},
			effect: {
				'en-us': "This attack does 20 damage times the number of your Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de vos Pokémon de Banc.",
				'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en Banca.",
				'it-it': "Questo attacco infligge 20 danni per ogni Pokémon che hai in panchina.",
				'pt-br': "Esse ataque causa 20 de danos vezes o número de Pokémon no seu Banco.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Pokémon auf deiner Bank zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Tonnerre",
				'es-es': "Rayo",
				'it-it': "Fulmine",
				'pt-br': "Relâmpago",
				'de-de': "Donnerblitz"
			},
			effect: {
				'en-us': "Discard all Energy attached to this Pokémon.",
				'fr-fr': "Défaussez toutes les Énergies attachées à ce Pokémon.",
				'es-es': "Descarta todas las Energías unidas a este Pokémon.",
				'it-it': "Scarta tutte le Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte toda a Energia ligada a este Pokémon.",
				'de-de': "Lege alle an dieses Pokémon angelegten Energien auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "When its electricity builds, its muscles are stimulated, and it becomes more aggressive than usual.",
	},

	thirdParty: {
		cardmarket: 281380,
		tcgplayer: 88523
	}
}

export default card
