import { Card } from "../../../interfaces"
import Set from "../sv-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "故勒頓"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 140,
	types: ["Dragon"],

	description: {
		'zh-tw': "牠似乎就是古老的探險記裡 提到的翼大王的真面目。 據記載，牠曾以拳頭擊裂大地。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撕裂"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		},

		damage: 130,
		cost: ["Fire", "Fighting", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card