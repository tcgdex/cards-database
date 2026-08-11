import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美錄梅塔"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		'zh-tw': "壽命快到盡頭的時候，身體就會生鏽解體。到最後細小的碎片會復活為美錄坦。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "能量連結"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張能量卡，附於這隻寶可夢身上。"
		},

		damage: 30,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "重磅衝擊"
		},

		damage: 130,
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
