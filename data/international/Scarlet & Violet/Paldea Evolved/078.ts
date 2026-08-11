import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [938],
	set: Set,

	name: {
		'fr-fr': "Têtampoule",
		'en-us': "Tadbulb",
		'es-es': "Tadbulb",
		'it-it': "Tadbulb",
		'pt-br': "Tadbulb",
		'de-de': "Blipp"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Ruée",
			'en-us': "Stampede",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'fr-fr': "Choc Statique",
			'en-us': "Static Shock",
			'es-es': "Impacto Estático",
			'it-it': "Shock Statico",
			'pt-br': "Choque de Estática",
			'de-de': "Statischer Schock"
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
				cardmarket: 715553,
				tcgplayer: 497489,
				cardtrader: 248705
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715553,
				tcgplayer: 497489,
				cardtrader: 248705
			}
		},
	],

	illustrator: "Tika Matsuno",

	description: {
		'en-us': "Tadbulb shakes its tail to generate electricity. If it senses danger, it will make its head blink on and off to alert its allies.",
	},
}

export default card
