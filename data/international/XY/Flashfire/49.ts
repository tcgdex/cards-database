import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Barbaracle",
		'fr-fr': "Golgopathe",
		'es-es': "Barbaracle",
		'it-it': "Barbaracle",
		'pt-br': "Barbaracle",
		'de-de': "Thanathora"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		689,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Binacle",
		'fr-fr': "Opermine",
		'es-es': "Binacle",
		'it-it': "Binacle",
		'pt-br': "Binacle",
		'de-de': "Bithora"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Rock Rush",
				'fr-fr': "Déferlante Rocheuse",
				'es-es': "Embestida de Rocas",
				'it-it': "Rocciafuria",
				'pt-br': "Arremetida de Pedras",
				'de-de': "Steinrutsche"
			},
			effect: {
				'en-us': "Discard as many Fighting Energy cards as you like from your hand. This attack does 30 damage times the number of Energy cards you discarded.",
				'fr-fr': "Défaussez autant de cartes Énergie Fighting que vous voulez de votre main. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
				'es-es': "Descarta tantas cartas de Energía Fighting como quieras de tu mano. Este ataque hace 30 puntos de daño por cada carta de Energía que hayas descartado.",
				'it-it': "Scarta tutte le carte Energia Fighting che vuoi dalla tua mano. Questo attacco infligge 30 danni per ogni carta Energia che hai scartato.",
				'pt-br': "Descarte tantos cards de Energia Fighting quanto desejar da sua mão. Esse ataque causa 30 de danos vezes o número de cards de Energia descartados.",
				'de-de': "Lege beliebig viele Fighting-Energiekarten von deiner Hand auf deinen Ablagestapel. Dieser Angriff fügt 30 Schadenspunkte für jede der von dir abgelegten Energiekarten zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Boulder Crush",
				'fr-fr': "Rocher Écrasant",
				'es-es': "Alud de Rocas",
				'it-it': "Macignata",
				'pt-br': "Rocha Esmagadora",
				'de-de': "Felsenquetscher"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When they evolve, two Binacle multiply into seven. They fight with the power of seven Binacle.",
	},

	thirdParty: {
		cardmarket: 281532,
		tcgplayer: 91182
	}
}

export default card
