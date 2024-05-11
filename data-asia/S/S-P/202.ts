import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘VMAX"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "充電尾"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多3張【雷】能量卡，附於自己的1隻寶可夢身上。"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "超極巨雷霆萬鈞"
		},

		damage: 250,
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card