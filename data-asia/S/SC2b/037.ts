import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捷克羅姆"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'zh-tw': "當尾巴的內部像馬達那樣旋轉起來，就能製造出好幾道閃電，穿透周圍的一切。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劈開"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "狂野衝擊"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到60點傷害。將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 130,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
