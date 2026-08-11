import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "偷兒狐"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "靠搶奪其他寶可夢找到的食物為生。腳上長著軟乎乎的肉球，走路時不會發出絲毫聲響。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "偷盜"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出1張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "尾擊"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
