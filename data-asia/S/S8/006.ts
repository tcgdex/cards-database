import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙鈴仙人掌"
	},

	illustrator: "313",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "一年散播一次種子。花的種子營養十足，是沙漠中貴重的食糧。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "啄"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "丟丟搖擺"
		},

		effect: {
			'zh-tw': "從自己的手牌將任意數量的「寶可夢道具」卡丟棄，造成其張數×50點傷害。"
		},

		damage: "50×",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card