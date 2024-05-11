import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "斗笠菇"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "會撒出毒孢子，然後再讓因吸入孢子而痛苦不堪的 對手吃上一記重拳。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "孢子彈"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "粉塵衝天"
		},

		effect: {
			'zh-tw': "這個招式必須在上個自己的回合這隻寶可夢使用了「孢子彈」才可使用。"
		},

		damage: 130,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card