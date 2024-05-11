import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飛天螳螂"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "隨著牠歷經越多的對戰，鐮刀也就會變得越鋒利。連大樹也能一刀劈成兩半。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "音速斬"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的特殊能量，將其丟棄。"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card