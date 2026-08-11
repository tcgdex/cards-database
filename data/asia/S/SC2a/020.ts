import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花椰猿"
	},

	illustrator: "Hasegawa Saki",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'zh-tw': "性情凶暴，會猛烈地揮舞帶刺的尾巴戰鬥。頭上的葉子非常苦。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "種子炸彈"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "終極衝擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
