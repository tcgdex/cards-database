import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Poipole",
		es: "Poipole",
		de: "Venicro"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [803],
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "This Ultra Beast is well enough liked to be\nchosen as a first partner in its own world.",
		es: "En su mundo, este Ultraente se considera tan entrañable\ncomo para ser elegido compañero de viaje.",
		de: "Diese Ultrabestie wird in der Welt, aus der sie kommt, so gemocht, dass sie oft als Partner für Reisen gewählt wird."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "2-Step",
			es: "2-Step",
			de: "2-Step"
		},

		damage: 20,
		cost: ["Darkness"],

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: []
}

export default card