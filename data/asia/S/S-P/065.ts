import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "閃焰王牌VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "雙倍奉還"
		},

		effect: {
			'zh-tw': "增加與在上個對手的回合這隻寶可夢受到的招式的傷害點相同數量的傷害。"
		},

		damage: "30+",
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "極巨烈焰球"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		damage: 170,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card