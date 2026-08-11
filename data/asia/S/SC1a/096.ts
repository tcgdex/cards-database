import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 喵喵"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "和好戰的海洋民族一起生活，久而久之身體的各個地方就都變成了黑鐵。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "磨爪"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢「劈開」的傷害「+60」點。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "劈開"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
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
	regulationMark: "D"
}

export default card