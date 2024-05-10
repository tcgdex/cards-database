import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帕底亞 肯泰羅"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "噴出的鼻息溫度很高，因此被命名為火熾種。 ３根尾巴總是束在一起。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "憤怒之角"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。"
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "火焰衝刺"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card