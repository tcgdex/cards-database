import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "快龍V"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 230,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "撕裂"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "龍之強風"
		},

		effect: {
			'zh-tw': "自己的所有備戰寶可夢也各受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 250,
		cost: ["Water", "Water", "Lightning"]
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card