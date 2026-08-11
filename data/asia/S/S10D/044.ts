import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小磁怪"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'zh-tw': "鐵球上長著一隻眼睛的相貌可謂奇異。 據推測，牠是靠著馬蹄形磁鐵般的 雙臂發出的磁力讓自己保持懸浮。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "磁力捕捉"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多3張【鋼】能量卡，在給對手看過後放回牌庫並重洗。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "滾球攻擊"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
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
	regulationMark: "F"
}

export default card