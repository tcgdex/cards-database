import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "混混鱷"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'zh-tw': "由於雙眼覆蓋著薄膜，在半夜中也能看見四周。 會和多隻同類組成群體生活。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "以牙還牙"
		},

		effect: {
			'zh-tw': "若對手剩餘獎賞卡的張數為1張，則增加90點傷害。"
		},

		damage: "30+",
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "推擊"
		},

		damage: 60,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card