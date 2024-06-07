import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "齒輪組"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'zh-tw': "如果認真起來，大齒輪外圈的齒輪會和小齒輪完全接合。此時轉速將會大幅提升。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "援軍"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【鋼】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "迴轉攻擊"
		},

		damage: 60,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
