import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超音蝠"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		'zh-tw': "皮膚薄到只要被陽光照射到就會曬傷。當天氣變冷時，會成群靠在一起互相取暖。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "藏入黑暗"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "高速飛行"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card