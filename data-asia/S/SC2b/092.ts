import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "齒輪兒"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'zh-tw': "２個身體比雙胞胎還要親近。要是換成別的齒輪兒，就沒有辦法好好咬合。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "援軍"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【鋼】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
