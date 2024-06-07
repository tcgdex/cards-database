import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍頭地鼠"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "別名鑽頭王。在地底下挖掘前進的速度 高達每小時１５０公里。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "突刺"
		},

		damage: 60,
		cost: ["Metal"]
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
	regulationMark: "G"
}

export default card