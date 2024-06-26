import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Vulpix"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		id: "Enam ekornya yang hangat menjadi makin indah dan bulunya makin bagus seiring dengan pertumbuhan tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Nyala Api"
		},

		damage: 40,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card