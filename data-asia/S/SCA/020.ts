import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吼鯨王"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	description: {
		'zh-tw': "有時會讓大大的身體在波浪上跳躍，藉此製造出衝擊讓對手昏迷。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "水幕"
		},

		effect: {
			'zh-tw': "每次從自己的手牌將能量附於這隻寶可夢身上時，都將這隻寶可夢的特殊狀態全部恢復。"
		}
	}, {
		name: {
			'zh-tw': "水炮"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×40點傷害。"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card