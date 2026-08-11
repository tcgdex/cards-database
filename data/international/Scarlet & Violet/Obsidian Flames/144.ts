import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [436],
	set: Set,

	name: {
		'fr-fr': "Archéomire",
		'en-us': "Bronzor",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'fr-fr': "Pioche Miroir",
			'en-us': "Mirror Draw",
			'es-es': "Robo Espejo",
			'it-it': "Pesca Riflessa",
			'pt-br': "Compra Espelhada",
			'de-de': "Spiegelzug"
		},

		effect: {
			'fr-fr': "Piochez des cartes jusqu'à en avoir autant dans votre main que votre adversaire.",
			'en-us': "Draw cards until you have the same number of cards in your hand as your opponent.",
			'es-es': "Roba cartas hasta que tengas la misma cantidad de cartas en tu mano que tu rival.",
			'it-it': "Pesca fino ad avere in mano lo stesso numero di carte del tuo avversario.",
			'pt-br': "Compre cartas até ter o mesmo número de cartas na sua mão do que seu oponente.",
			'de-de': "Ziehe so lange Karten, bis du genauso viele Karten auf der Hand hast wie dein Gegner."
		}
	}, {
		cost: ["Metal", "Metal"],

		name: {
			'fr-fr': "Plongée Rapide",
			'en-us': "Speed Dive",
			'es-es': "Picado Rápido",
			'it-it': "Immersione Rapida",
			'pt-br': "Mergulho Veloz",
			'de-de': "Tempohechtsprung"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Ancient people believed that the pattern on Bronzor's back contained a mysterious power.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725224,
				tcgplayer: 509928,
				cardtrader: 255829
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725224,
				tcgplayer: 509928,
				cardtrader: 255829
			}
		},
	],

	illustrator: "Shinji Kanda",

	
}

export default card
