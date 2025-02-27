import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "オオタチ"
	},

	illustrator: "REND",
	rarity: "None",
	category: "Pokemon",
	dexId: [162],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "細長い 巣穴で 子育て。 子供が 育つと 巣穴の 外で 独り立ちの 準備を させる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ひっかく"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ジェットヘッド"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card