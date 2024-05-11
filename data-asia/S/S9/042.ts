import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮可西"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'zh-tw': "妖精的一種。極少出現在人類面前。一感覺到有人 就會立刻逃走。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "月夜奇跡"
		},

		effect: {
			'zh-tw': "擲3次硬幣，選擇最多與正面出現的次數相同數量的自己的寶可夢。然後，從自己的牌庫選擇所選的寶可夢進化而來的卡各1張，放置於各自身上完成進化。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "魔法射擊"
		},

		damage: 90,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card