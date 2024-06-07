import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "一擊武道熊師"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		'zh-tw': "棲息在遙遠地區的山岳地帶。會在斷崖絕壁上來回奔跑 鍛鍊下盤，磨練招式。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "場地粉碎"
		},

		effect: {
			'zh-tw': "將場上的對手的競技場卡丟棄。"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'zh-tw': "修羅拳"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加100點傷害。"
		},

		damage: "100+",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card