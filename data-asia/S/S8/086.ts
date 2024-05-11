import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏飽栗鼠VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "零成本"
		},

		effect: {
			'zh-tw': "若這個招式的傷害將對手的【基礎】寶可夢【氣絕】，則多獲得2張獎賞卡。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "極巨強慾"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出3張卡。"
		},

		damage: 160,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card