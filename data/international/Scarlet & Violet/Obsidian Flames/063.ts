import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [81],
	set: Set,

	name: {
		'fr-fr': "Magnéti",
		'en-us': "Magnemite",
		'es-es': "Magnemite",
		'it-it': "Magnemite",
		'pt-br': "Magnemite",
		'de-de': "Magnetilo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Collision",
			'en-us': "Ram",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Balle Rapide",
			'en-us': "Speed Ball",
			'es-es': "Bola Rápida",
			'it-it': "Velocipalla",
			'pt-br': "Bola Veloz",
			'de-de': "Geschwindigkeitsball"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725143,
				tcgplayer: 509823,
				cardtrader: 255623
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725143,
				tcgplayer: 509823,
				cardtrader: 255623
			}
		},
	],

	illustrator: "Masakazu Fukuda",

	
}

export default card
