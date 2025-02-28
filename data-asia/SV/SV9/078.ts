import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ノコッチ",
		'zh-tw': "土龍弟弟",
		'zh-cn': "土龍弟弟"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	dexId: [206],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "暗い場所に 迷路を 作る。 だれかに みられると 尻尾で 地面を 掘って 逃げようとする。",
		'zh-tw': "會在陰暗處做出迷宮。 只要被誰看見就會 用尾巴挖掘地面逃走。",
		'zh-cn': "會在陰暗處做出迷宮。 只要被誰看見就會 用尾巴挖掘地面逃走。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "いれかわる",
			'zh-tw': "交替",
			'zh-cn': "交替"
		},

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			'zh-cn': "將這隻寶可夢與備戰寶可夢互換。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞",
			'zh-cn': "衝撞"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card