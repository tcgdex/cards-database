import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "バクーダ",
		'zh-tw': "噴火駝"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [323],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "火山の 火口で 生活する。 １０年ごとに 背中の コブが 大噴火することで 有名だ。",
		'zh-tw': "平時生活在火山口。以背上的駝峰每１０年 會大爆發一次而聞名。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ふんか",
			'zh-tw': "噴火"
		},

		damage: "50+",

		effect: {
			ja: "おたがいの山札を上から1枚ずつトラッシュし、その中にあるエネルギーの枚数×100ダメージ追加。",
			'zh-tw': "將雙方的牌庫上方各1張卡丟棄，增加其中能量卡的張數×100點傷害。"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ばくねつスタンプ",
			'zh-tw': "爆熱踩踏"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card