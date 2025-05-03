import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "オオタチ",
		'zh-tw': "大尾立",
		'zh-cn': "大尾立"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [162],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "細長い 巣穴で 子育て。 子供が 育つと 巣穴の 外で 独り立ちの 準備を させる。",
		'zh-tw': "在細長的巢穴中養育孩子。 孩子長大後，就會到巢穴外 讓孩子準備獨立生活。",
		'zh-cn': "在細長的巢穴中養育孩子。 孩子長大後，就會到巢穴外 讓孩子準備獨立生活。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ひっかく",
			'zh-tw': "抓",
			'zh-cn': "抓"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ジェットヘッド",
			'zh-tw': "噴射頭擊",
			'zh-cn': "噴射頭擊"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card