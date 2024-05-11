import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰砌鵝V"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "寒氣吸收"
		},

		effect: {
			'zh-tw': "在自己的回合，每次從自己的手牌將【水】能量附於這隻寶可夢身上時，將這隻寶可夢恢復「30」HP。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "暴風雪"
		},

		effect: {
			'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
