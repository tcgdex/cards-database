import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "變澀蜥"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "頭腦聰明但是很怕麻煩。 為了不讓敵人接近自己的地盤， 在各個地方都設下了陷阱。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "彈跳"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card