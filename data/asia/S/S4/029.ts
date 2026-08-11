import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "戽斗尖梭"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "像長矛一樣尖銳的下巴擁有鋼鐵般的硬度。據說牠的肉好吃得驚人。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "瞄準穿刺"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢，受到那隻寶可夢身上放置的傷害指示物的數量×20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "噴射頭擊"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card