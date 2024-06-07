import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "連擊武道熊師"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'zh-tw': "以多擊必勝作為信念。會如流水般連續不斷地 用打擊招式轟打對手。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "利爪揮砍"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "連彈衝刺"
		},

		effect: {
			'zh-tw': "造成自己的場上「連擊」寶可夢的數量×30點傷害。"
		},

		damage: "30×",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card