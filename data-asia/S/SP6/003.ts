import { Card } from "../../../interfaces"
import Set from "../SP6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒼響V"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "打穿"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力、對手的戰鬥寶可夢身上的附加效果。"
		},

		damage: 40,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "巨獸斬"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【VMAX】」，則增加160點傷害。"
		},

		damage: "100+",
		cost: ["Metal", "Metal", "Colorless"]
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
	regulationMark: "F"
}

export default card