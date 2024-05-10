import { Card } from "../../../interfaces"
import Set from "../svEL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "厲害釣竿"
	},

	illustrator: "Toyste Beach",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card