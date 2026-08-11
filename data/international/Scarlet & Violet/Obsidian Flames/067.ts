import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [602],
	set: Set,

	name: {
		'fr-fr': "Anchwatt",
		'en-us': "Tynamo",
		'es-es': "Tynamo",
		'it-it': "Tynamo",
		'pt-br': "Tynamo",
		'de-de': "Zapplardin"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Choc Statique",
			'en-us': "Static Shock",
			'es-es': "Impacto Estático",
			'it-it': "Shock Statico",
			'pt-br': "Choque de Estática",
			'de-de': "Statischer Schock"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'fr-fr': "Foudre Minuscule",
			'en-us': "Tiny Bolt",
			'es-es': "Relampaguito",
			'it-it': "Minifulmine",
			'pt-br': "Corisquinho",
			'de-de': "Mini-Blitz"
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

	description: {
		'en-us': "While one alone doesn't have much power, a chain of many Tynamo can be as powerful as lightning.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725147,
				tcgplayer: 509832,
				cardtrader: 255627
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725147,
				tcgplayer: 509832,
				cardtrader: 255627
			}
		},
	],

	illustrator: "Kagemaru Himeno",

	
}

export default card
