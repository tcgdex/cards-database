import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洛奇亞VSTAR"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "聚合星星"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。從自己的棄牌區選擇最多2張【無】寶可夢卡（「擁有規則的寶可夢」除外），放置於備戰區。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "風暴俯衝"
		},

		effect: {
			'zh-tw': "若希望，將場上的競技場卡丟棄。"
		},

		damage: 220,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card