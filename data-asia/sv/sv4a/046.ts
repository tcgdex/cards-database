import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナミイルカ"
	},

	illustrator: "kodama",
	category: "Pokemon",
	dexId: [963],
	hp: 50,
	types: ["Water"],

	description: {
		ja: "尾びれの 水のリングで 仲間と 遊ぶのが 好き。 超音波で 生き物の 気持ちを 察知する。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ゆうきのしんか"
		},

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。その後、このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。"
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "ひれカッター"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card