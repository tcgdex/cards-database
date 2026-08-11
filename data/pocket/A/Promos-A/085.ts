import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Vanillite",
		'es-es': "Vanillite"
	},

	illustrator: "OOYAMA",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [582],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "Unable to survive in hot areas, it makes itself\ncomfortable by breathing out air cold enough to\ncause snow. It burrows into the snow to sleep.",
		'es-es': "No puede vivir en lugares muy cálidos. Provoca\nnevadas exhalando un vaho gélido y luego se\nacurruca en la nieve acumulada para dormir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sweets Relay",
			'es-es': "Relevo Dulce"
		},

		damage: 10,
		cost: ["Water"],

		effect: {
			'en-us': "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage.",
			'es-es': "Si 1 de tus Pokémon usó Relevo Dulce durante tu último turno, este ataque hace 20 puntos de daño más."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol10"]
}

export default card