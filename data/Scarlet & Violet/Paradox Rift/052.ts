import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [960],
	set: Set,

	name: {
		en: "Wiglett",
		fr: "Taupikeau",
		es: "Wiglett",
		it: "Wiglett",
		pt: "Wiglett",
		de: "Schligda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Vibration",
			fr: "Vibration",
			es: "Vibración",
			it: "Vibrazione",
			pt: "Vibração",
			de: "Schwingung"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Tomokazu Komiya"
}

export default card