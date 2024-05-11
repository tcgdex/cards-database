import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙尾怪手"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "不管做什麼事都會用到尾巴。如果牠用２根尾巴抱緊你， 就代表牠真的和你很親近。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "抓到飽"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，從自己的牌庫任意選擇最多與正面出現的次數相同數量的卡，加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "拍落"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card