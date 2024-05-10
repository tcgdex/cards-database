import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "タマンタ",
		'zh-tw': "小球飛魚"
	},

	illustrator: "rika",
	category: "Pokemon",
	dexId: [458],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "テッポウオの 群れに 混ざって 泳ぐ。 敵に 襲われると 群れと いっしょに 戦うよ。",
		'zh-tw': "混在鐵炮魚的大群裡游泳。受到敵人襲擊的時候， 會和鐵炮魚們並肩作戰。"
	},

	stage: "Basic",

	attacks: [{


		name: {
			ja: "ぷかぷかヒーリング",
			'zh-tw': "吐泡泡治療"
		},

		effect: {
			ja: "自分のベンチポケモン1匹のHPを「120」回復する。",
			'zh-tw': "將自己的1隻備戰寶可夢恢復「120」HP。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card
