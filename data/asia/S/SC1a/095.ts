import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨石丁VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "岩石之禮"
		},

		effect: {
			'zh-tw': "從自己的手牌選擇1張【鬥】能量卡，附於自己的寶可夢身上。然後，將那隻寶可夢恢復「120」HP。"
		},

		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "極巨岩石"
		},

		damage: 200,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card