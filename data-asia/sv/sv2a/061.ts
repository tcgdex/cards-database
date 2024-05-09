import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロゾ"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [61],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "ぬめぬめとした 粘液状の 汗を かく。 敵に 捕まっても ぬるりと すり抜け 逃げるのだ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "スプラッシュ"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "かえるとび"
		},

		damage: "30＋",

		effect: {
			ja: "コインを1回投げオモテなら、60ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card