import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jolteon",
		'es-es': "Jolteon"
	},

	illustrator: "Mizue",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [135],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Eevee",
		'es-es': "Eevee"
	},

	description: {
		'en-us': "It concentrates the weak electric charges emitted\nby its cells and launches wicked lightning bolts.",
		'es-es': "Concentra la débil actividad eléctrica de\nsus células para lanzar dañinas descargas."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Beginning Bolt",
			'es-es': "Descarga de Arranque"
		},

		damage: 40,
		cost: ["Lightning"],

		effect: {
			'en-us': "If this Pokémon evolved during this turn, this attack does 20 more damage.",
			'es-es': "Si este Pokémon ha evolucionado durante este turno, este ataque hace 20 puntos de daño más."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol10"]
}

export default card