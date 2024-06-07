import { Card } from "../../../interfaces"
import Set from "../SDP"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捷拉奧拉"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "會用與落雷相同的速度急速接近敵人，然後用銳利的爪子把對手撕碎。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "瘋狂伏特"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到20點傷害。"
		},

		damage: 70,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card