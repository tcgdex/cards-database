import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蜂女王"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "自由自在地指揮孩子們與敵人戰鬥。孩子們會 為了蜂女王而拼上性命。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "蜜之猛攻"
		},

		effect: {
			'zh-tw': "從自己的手牌將任意數量的「甜甜蜜」卡給對手看過後，造成其張數×60點傷害。"
		},

		damage: "60×",
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "突刺"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card