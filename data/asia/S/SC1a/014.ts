import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蟲電寶"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "用結實的外殼保護自己。會從顎部的尖端放出電流反擊對手。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "充電"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【雷】能量卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "光彈"
		},

		damage: 70,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card