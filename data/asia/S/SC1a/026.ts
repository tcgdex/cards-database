import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啪嚓海膽V"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "啪啪反擊"
		},

		effect: {
			'zh-tw': "當這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害時，己方擲3次硬幣，將正面出現的次數×3個的傷害指示物，放置於使用招式的寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "閃雷攻擊"
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card