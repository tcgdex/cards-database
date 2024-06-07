import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒼響"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "用過去使用的兵器武裝自己。即使是超極巨化寶可夢，也能以一劍將之拿下。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "戰鬥軍團"
		},

		effect: {
			'zh-tw': "增加自己的備戰寶可夢的數量×10點傷害。這個招式的傷害不計算弱點與對手的戰鬥寶可夢身上的附加效果。"
		},

		damage: "20+",
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "利刃切割"
		},

		damage: 100,
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

	retreat: 2,
	regulationMark: "F"
}

export default card