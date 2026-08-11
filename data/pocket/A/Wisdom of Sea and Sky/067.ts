import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat"
	},

	illustrator: "0313",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [179],
	hp: 60,
	types: ["Lightning"],

	description: {
		'en-us': "If static electricity builds in its body, its fleece\ndoubles in volume. Touching it will shock you.",
		'fr-fr': "Quand son corps est chargé d'électricité statique, sa laine double de volume et envoie des décharges lorsqu'on la touche."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Static Shock",
			'fr-fr': "Choc Statique"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card