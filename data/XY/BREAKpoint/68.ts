import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Gible",
		fr: "Griknot",
		es: "Gible",
		it: "Gible",
		pt: "Gible",
		de: "Kaumalat"
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
				en: "Never Enough",
				fr: "Insatiable",
				es: "Nunca Suficiente",
				it: "Senza Fine",
				pt: "Nunca é o Suficiente",
				de: "Gier"
			},
			effect: {
				en: "Discard a card from your hand. If you do, draw 2 cards.",
				fr: "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes.",
				es: "Descarta 1 carta de tu mano. Si lo haces, roba 2 cartas.",
				it: "Scarta una delle carte che hai in mano. Se lo fai, pesca due carte.",
				pt: "Descarte um card da sua mão. Se fizer isso, compre 2 cards.",
				de: "Lege 1 Karte von deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 2 Karten."
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



}

export default card
