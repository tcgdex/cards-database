import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪笠怪",
		'zh-cn': "雪笠怪",
		ja: "ユキカブリ"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "在寒冷的季節裡會 移動到山腳下，一到春天就會 返回積雪尚存的山頂。",
		'zh-cn': "在寒冷的季節裡會 移動到山腳下，一到春天就會 返回積雪尚存的山頂。",
		ja: "寒い 季節は 山の ふもとまで 降りてくるが 春に なると 雪が 残る 山頂に 戻っていく。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "打擊",
			'zh-cn': "打擊",
			ja: "なぐる"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "冰柱",
			'zh-cn': "冰柱",
			ja: "つらら"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [459]
}

export default card