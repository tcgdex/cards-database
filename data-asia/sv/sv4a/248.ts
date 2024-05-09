import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パモット"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	dexId: [922],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "手のひらで 打撃を 加えつつ 肉球で 電撃を 浴びせる 独特の 格闘技を 使う。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "でんきショック"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "ヘッドボルト"
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