import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天罩蟲"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "雖然幾乎從來不動但還是活著的。牠的超能力似乎是在縮在殼裡不吃不喝的過程中覺醒的。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "反射壁"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-40」點。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "衝撞"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
