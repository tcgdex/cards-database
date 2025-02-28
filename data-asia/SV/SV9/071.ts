import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "コモルー",
		'zh-tw': "甲殼龍",
		'zh-cn': "甲殼龍"
	},

	illustrator: "Julie Hang",
	rarity: "Common",
	category: "Pokemon",
	dexId: [372],
	hp: 100,
	types: ["Dragon"],

	description: {
		ja: "殻の 中では 爆発的な スピードで 細胞が 変化し 進化の 準備を しているぞ。",
		'zh-tw': "細胞在殼中 以爆發般的速度變化， 正在為進化做準備。",
		'zh-cn': "細胞在殼中 以爆發般的速度變化， 正在為進化做準備。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ガードプレス",
			'zh-tw': "防守壓制",
			'zh-cn': "防守壓制"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			'zh-cn': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		}
	}, {
		cost: ["Fire", "Water", "Colorless"],

		name: {
			ja: "ヘビーインパクト",
			'zh-tw': "重磅衝擊",
			'zh-cn': "重磅衝擊"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card