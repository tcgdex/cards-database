import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉艾勒奇V",
		ja: "レジエレキV"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "切換伏特",
			ja: "スイッチボルト"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			ja: "このポケモンをベンチポケモンと入れ替える。"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "雷電堡壘",
			ja: "ライトニングウォール"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-100」點。",
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-100」される。"
		},

		damage: 100,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card