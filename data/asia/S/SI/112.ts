import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "好勝毛蟹V"
	},

	illustrator: "MUGENUP",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "起崩"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方2張卡丟棄。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "破壞者之拳"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×60點傷害。"
		},

		damage: "90+",
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card