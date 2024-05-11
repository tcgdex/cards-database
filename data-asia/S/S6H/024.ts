import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帝牙海獅"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		'zh-tw': "用強壯的獠牙粉碎浮冰。厚厚的脂肪可以反彈敵人的攻擊。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "鐵頭碰"
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "金屬斬"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 130,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card