import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [636],
	set: Set,

	name: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'es-es': "Larvesta",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'de-de': "Ignivor"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant",
			'es-es': "Carbón Activado",
			'it-it': "Carboni Ardenti",
			'pt-br': "Carvão Vivo",
			'de-de': "Glühende Kohlen"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "The people of ancient times believed that Larvesta fell from the sun.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691741,
				tcgplayer: 478107
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691741,
				tcgplayer: 478107
			}
		},
	],
}

export default card
