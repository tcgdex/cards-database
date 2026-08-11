import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1008],
	set: Set,

	name: {
		'en-us': "Miraidon",
		'fr-fr': "Miraidon",
		'es-es': "Miraidon",
		'it-it': "Miraidon",
		'pt-br': "Miraidon",
		'de-de': "Miraidon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Electric Claws",
			'fr-fr': "Griffes Électriques",
			'es-es': "Garras Eléctricas",
			'it-it': "Artigli Elettrici",
			'pt-br': "Garras Elétricas",
			'de-de': "Elektrokrallen"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Mach Bolt",
			'fr-fr': "Éclair Fulgurant",
			'es-es': "Rayo Mach",
			'it-it': "Fulmine Mach",
			'pt-br': "Raio Supersônico",
			'de-de': "Flotter Sprung"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "hncl",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769427,
				tcgplayer: 593282
			},
		}
	],
}

export default card
