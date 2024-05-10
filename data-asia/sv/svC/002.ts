import { Card } from "../../../interfaces"
import Set from "../svC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小磁怪"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		'zh-tw': "從左右兩邊的組件發出的電磁波能阻礙重力，使牠浮在空中。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "磁力蓄電"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【雷】能量」卡，附於1隻備戰寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "高速球"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card