import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "戽斗尖梭"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "像長矛一樣尖銳的下巴擁有鋼鐵般的硬度。據說牠的肉好吃得驚人。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "啄"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "螺旋飛衝"
		},

		effect: {
			'zh-tw': "將自己的手牌的2張【水】能量卡丟棄。若無法丟棄2張，則這個招式失敗。"
		},

		damage: 130,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
