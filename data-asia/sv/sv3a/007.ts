import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "タマンタ"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [458],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "テッポウオの 群れに 混ざって 泳ぐ。 敵に 襲われると 群れと いっしょに 戦うよ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Void"],

		name: {
			ja: "ぷかぷかヒーリング"
		},

		effect: {
			ja: "自分のベンチポケモン1匹のHPを「120」回復する。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 0
}

export default card