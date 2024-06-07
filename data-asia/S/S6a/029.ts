import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "頑皮雷彈"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "因為體內儲存著多到快要滿出來的電能，所以稍微受點刺激就會爆炸。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "音爆"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力。"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "大爆炸"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到90點傷害。"
		},

		damage: 120,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card