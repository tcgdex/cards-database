import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霜奶仙"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "牠會把自己用鮮奶油裝飾過的樹果送給自己信任的訓練家。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "裝飾"
		},

		effect: {
			'zh-tw': "從自己的手牌選擇任意數量的基本能量卡，以任意方式附於自己的寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "吸取之吻"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card