import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡比獸"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "每天不吃下４００公斤的食物絕不會善罷甘休。 吃飽了就會開始睡覺。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "無畏脂肪"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "轟隆打呼"
		},

		effect: {
			'zh-tw': "將這隻寶可夢【睡眠】。因這個【睡眠】的擲硬幣次數改為2次，若沒有全部為正面則無法恢復。"
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card