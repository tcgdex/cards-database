import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蓋歐卡"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "據說會用降下大雨的能力擴張海洋。一直沉睡在海溝的底部。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "水風暴"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方5張卡丟棄，對手的2隻備戰寶可夢各受到其中的能量卡的張數×50點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water", "Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "衝浪"
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card