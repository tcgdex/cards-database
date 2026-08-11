import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴鯉龍V"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "勃然大怒"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Water", "Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "重磅風暴"
		},

		damage: 180,
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card