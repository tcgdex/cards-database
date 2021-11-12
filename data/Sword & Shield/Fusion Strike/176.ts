import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Impidimp",
		fr: "Grimalin",
		es: "Impidimp",
		it: "Impidimp",
		pt: "Impidimp",
		de: "Bähmon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "sowsow",

	description: {
		en: "It sneaks into people's homes, stealing things and feasting on the negative energy of the frustrated occupants."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Play Rough"
		},

		damage: "10+",

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card