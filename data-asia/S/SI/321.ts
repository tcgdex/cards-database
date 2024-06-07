import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "音波龍V"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 200,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "爆音波"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "同步高聲"
		},

		effect: {
			'zh-tw': "若自己的手牌的張數與對手的手牌的張數相同，則增加120點傷害。"
		},

		damage: "60+",
		cost: ["Psychic", "Darkness"]
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card