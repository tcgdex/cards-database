import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Vulpix"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'id-id': "Enam ekornya yang hangat menjadi makin indah dan bulunya makin bagus seiring dengan pertumbuhan tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Nyala Api"
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