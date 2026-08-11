import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "密勒頓ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "快速抽出"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。"
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "高科技渦輪"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張「基本【雷】能量」卡，附於備戰寶可夢身上。"
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card