import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "木木梟"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "在狹窄陰暗的地方才會感到安穩。有時也會用訓練家的懷抱 或是包包代替巢穴。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "銳利羽"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card