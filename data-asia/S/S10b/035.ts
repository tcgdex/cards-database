import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "仙子伊布"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "會從蝴蝶結般的觸角裡釋放能夠消除敵意的波動，藉此平息紛爭。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "伴手禮"
		},

		effect: {
			'zh-tw': "從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "奇跡閃光"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為【龍】寶可夢，則增加90點傷害。"
		},

		damage: "90+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card