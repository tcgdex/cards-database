import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒼響"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "用過去使用的兵器武裝自己。即使是超極巨化寶可夢，也能以一劍將之拿下。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "金屬武器"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張基本能量卡，附於這隻寶可夢身上。"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "奇幻之劍"
		},

		effect: {
			'zh-tw': "若對手的場上有「寶可夢【VMAX】」，則增加150點傷害。"
		},

		damage: "150+",
		cost: ["Grass", "Psychic", "Metal"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
