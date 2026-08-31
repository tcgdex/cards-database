import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Marill",
		de: "Marill"
	},

	illustrator: "Shibuzoh.",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [183],
	hp: 60,
	types: ["Water"],

	description: {
		en: "The fur on its body naturally repels water. It can\nstay dry even when it plays in the water.",
		de: "Sein Fell ist von Natur aus wasserabweisend. Es bleibt trocken, auch wenn es im Wasser spielt."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			de: "Tackle"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card