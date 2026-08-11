import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [924],
	set: Set,

	name: {
		'fr-fr': "Compagnol",
		'en-us': "Tandemaus",
		'es-es': "Tandemaus",
		'it-it': "Tandemaus",
		'pt-br': "Tandemaus",
		'de-de': "Zwieps"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Collecte",
			'en-us': "Collect",
			'es-es': "Coleccionar",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'de-de': "Sammeln"
		},

		effect: {
			'fr-fr': "Piochez 2 cartes.",
			'en-us': "Draw 2 cards.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Gifle Douce",
			'en-us': "Gentle Slap",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'de-de': "Sanfter Hieb"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715641,
				tcgplayer: 497585,
				cardtrader: 248821
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715641,
				tcgplayer: 497585,
				cardtrader: 248821
			}
		},
	],

	illustrator: "Oswaldo KATO",

	description: {
		'en-us': "Exhibiting great teamwork, they use their incisors to cut pieces out of any material that might be useful for a nest, then make off with them.",
	},
}

export default card
