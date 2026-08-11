import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Gible",
		'fr-fr': "Griknot",
		'es-es': "Gible",
		'it-it': "Gible",
		'pt-br': "Gible",
		'de-de': "Kaumalat"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		443,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Never Enough",
				'fr-fr': "Insatiable",
				'es-es': "Nunca Suficiente",
				'it-it': "Senza Fine",
				'pt-br': "Nunca é o Suficiente",
				'de-de': "Gier"
			},
			effect: {
				'en-us': "Discard a card from your hand. If you do, draw 2 cards.",
				'fr-fr': "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes.",
				'es-es': "Descarta 1 carta de tu mano. Si lo haces, roba 2 cartas.",
				'it-it': "Scarta una delle carte che hai in mano. Se lo fai, pesca due carte.",
				'pt-br': "Descarte um card da sua mão. Se fizer isso, compre 2 cards.",
				'de-de': "Lege 1 Karte von deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 2 Karten."
			},

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
		'en-us': "It nests in small, horizontal holes in cave walls. It pounces to catch prey that stray too close.",
	},

	thirdParty: {
		cardmarket: 288243,
		tcgplayer: 111607
	}
}

export default card
