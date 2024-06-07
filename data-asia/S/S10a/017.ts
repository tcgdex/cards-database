import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "自爆磁怪VSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "磁力緊握"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張物品卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		damage: 180,
		cost: ["Lightning", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]電子星星"
		},

		effect: {
			'zh-tw': "對手的2隻備戰寶可夢各受到90點傷害。[在備戰區不計算弱點・抵抗力。][對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card