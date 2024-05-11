import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 喵頭目"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "在日復一日的戰鬥中得以進化。進化的結果是那危險的指甲，留長後能當作短劍來用。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "鼓勵"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "鐵頭碰"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card