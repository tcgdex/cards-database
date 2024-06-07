import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰伊布V"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "冰霜充能"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【水】能量卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "凍凝之風"
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card