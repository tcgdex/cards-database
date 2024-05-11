import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 魔牆人偶"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "擅長踢踏舞。會用冷氣製造出冰之地板並將其踢起，以此作為保護自己的障壁。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "反射壁"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "雪花冰"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
