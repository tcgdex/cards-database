import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [324],
	set: Set,

	name: {
		'en-us': "Torkoal",
		'fr-fr': "Chartor",
		'es-es': "Torkoal",
		'de-de': "Qurtel",
		'it-it': "Torkoal",
		'pt-br': "Torkoal",
		'es-mx': "Torkoal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant",
			'es-es': "Carbón Activado",
			'de-de': "Glühende Kohlen",
			'it-it': "Carboni Ardenti",
			'pt-br': "Carvão Vivo",
			'es-mx': "Carbón Activado"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de Chaleur",
			'es-es': "Explosión de Calor",
			'de-de': "Hitzestoß",
			'it-it': "Caldobomba",
			'pt-br': "Raio de Calor",
			'es-mx': "Explosión Ígnea"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",
	illustrator: "kodama",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817177,
				tcgplayer: 623452
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817177,
				tcgplayer: 623452
			}
		},
	],
}

export default card
