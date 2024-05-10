import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美錄坦"
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "美錄坦們雖然聚在一起生活，但當時機到來，會由最強的那１隻 吸收其他的夥伴來進化。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "溶解"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card