import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鍬農炮蟲"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		'zh-tw': "用腹部發電，並把電力集中在大大的顎部，釋放出能量驚人的光束。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "強力風暴"
		},

		effect: {
			'zh-tw': "增加自己的場上寶可夢身上附加的能量的數量×20點傷害。"
		},

		damage: "60+",
		cost: ["Lightning", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "電擊光束"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 170,
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card