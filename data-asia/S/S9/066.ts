import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "結草貴婦"
	},

	illustrator: "Ryo Ueda",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		'zh-tw': "從結草兒進化過來時，蓑衣成了身體的一部分。 一輩子都不會脫下蓑衣。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "貴婦之怒"
		},

		effect: {
			'zh-tw': "增加自己的棄牌區的寶可夢卡的張數×10點傷害。"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "落鐵屑"
		},

		damage: 90,
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