import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Mareep",
		fr: "Wattouat"
	},

	illustrator: "0313",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "If static electricity builds in its body, its fleece\ndoubles in volume. Touching it will shock you.",
		fr: "Quand son corps est chargé d'électricité statique, sa laine double de volume et envoie des décharges lorsqu'on la touche."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Static Shock",
			fr: "Choc Statique"
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