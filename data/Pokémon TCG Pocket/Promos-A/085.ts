import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Vanillite",
		es: "Vanillite"
	},

	illustrator: "OOYAMA",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [582],
	hp: 60,
	types: ["Water"],

	description: {
		en: "Unable to survive in hot areas, it makes itself\ncomfortable by breathing out air cold enough to\ncause snow. It burrows into the snow to sleep.",
		es: "No puede vivir en lugares muy cálidos. Provoca\nnevadas exhalando un vaho gélido y luego se\nacurruca en la nieve acumulada para dormir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sweets Relay",
			es: "Relevo Dulce"
		},

		damage: 10,
		cost: ["Water"],

		effect: {
			en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage.",
			es: "Si 1 de tus Pokémon usó Relevo Dulce durante tu último turno, este ataque hace 20 puntos de daño más."
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