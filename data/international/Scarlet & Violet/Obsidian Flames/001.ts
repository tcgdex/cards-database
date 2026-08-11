import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [43],
	set: Set,

	name: {
		'fr-fr': "Mystherbe",
		'en-us': "Oddish",
		'es-es': "Oddish",
		'it-it': "Oddish",
		'pt-br': "Oddish",
		'de-de': "Myrapla"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Mode Cool",
			'en-us': "Feelin' Fine",
			'es-es': "Buen Rollito",
			'it-it': "Tuttobene",
			'pt-br': "Sensação Boa",
			'de-de': "Wohl fühlen"
		},

		effect: {
			'fr-fr': "Piochez une carte.",
			'en-us': "Draw a card.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta.",
			'de-de': "Ziehe 1 Karte."
		}
	}, {
		cost: ["Grass"],

		name: {
			'fr-fr': "Ruée",
			'en-us': "Stampede",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "During the day, it stays in the cold underground to avoid the sun. It grows by bathing in moonlight.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725081,
				tcgplayer: 509637,
				cardtrader: 255561
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725081,
				tcgplayer: 509637,
				cardtrader: 255561
			}
		},
	],

	illustrator: "Midori Harada",

	
}

export default card
