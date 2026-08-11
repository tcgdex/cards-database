import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "哲爾尼亞斯"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說當頭上的角閃耀七色光芒時，就會分享永恆的生命。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "大地搜尋"
		},

		effect: {
			'zh-tw': "從自己的棄牌區任意選擇1張卡，在給對手看過後加入手牌。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "極光增輝"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 100,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
