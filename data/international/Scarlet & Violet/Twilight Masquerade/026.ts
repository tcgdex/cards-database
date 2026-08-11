import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

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

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant",
			'es-es': "Carbón Activado",
			'it-it': "Carboni Ardenti",
			'pt-br': "Carvão Vivo",
			'de-de': "Glühende Kohlen"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "As its body grows larger, its six warm tails become more beautiful, with a more luxurious coat of fur.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769200,
				tcgplayer: 550070
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769200,
				tcgplayer: 550070
			}
		},
	],

	illustrator: "sowsow",

}

export default card