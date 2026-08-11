import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [104],
	set: Set,

	name: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'es-es': "Cubone",
		'de-de': "Tragosso",
		'it-it': "Cubone",
		'pt-br': "Cubone",
		'es-mx': "Cubone"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'de-de': "Zertrampeln",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'es-mx': "Estampida"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Light Punch",
			'fr-fr': "Poing Léger",
			'es-es': "Puño Ligero",
			'de-de': "Leichter Hieb",
			'it-it': "Pugnetto",
			'pt-br': "Soco de Luz",
			'es-mx': "Puño Ligero"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Mugi Hamada",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817228,
				tcgplayer: 623503
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817228,
				tcgplayer: 623503
			}
		},
	],
}

export default card
