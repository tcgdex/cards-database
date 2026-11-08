import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [228],
	set: Set,

	name: {
		'fr-fr': "Malosse",
		'en-us': "Houndour",
		'es-es': "Houndour",
		'it-it': "Houndour",
		'pt-br': "Houndour",
		'de-de': "Hunduster"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Morsure",
			'en-us': "Bite",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'fr-fr': "Croc Obscur",
			'en-us': "Darkness Fang",
			'es-es': "Colmillo de Oscuridad",
			'it-it': "Oscurizanna",
			'pt-br': "Presa Sombria",
			'de-de': "Fänge der Dunkelheit"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It is smart enough to hunt in packs. It uses a variety of cries for communicating with others.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725212,
				tcgplayer: 509891,
				cardtrader: 255817
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725212,
				tcgplayer: 509891,
				cardtrader: 255817
			}
		},
	],

	illustrator: "Kurata So",

	
}

export default card
