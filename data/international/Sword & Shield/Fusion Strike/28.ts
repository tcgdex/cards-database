import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [37],
	set: Set,

	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Sekio",

	description: {
		'en-us': "As each tail grows, its fur becomes more lustrous. When held, it feels slightly warm."
	},

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant",
			'de-de': "Glühende Kohlen",
			'es-es': "Carbón Activado",
			'pt-br': "Carvão Vivo",
			'it-it': "Carboni Ardenti"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582162,
				tcgplayer: 253124
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582162,
				tcgplayer: 253124
			}
		},
	],
}

export default card
