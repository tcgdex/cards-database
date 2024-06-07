import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超音蝠",
		th: "ซูแบท"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		'zh-tw': "皮膚薄到只要被陽光照射到就會曬傷。當天氣變冷時，會成群靠在一起互相取暖。",
		th: "ผิวบางขนาดที่ผิวจะไหม้เมื่อถูกแสงแดด เมื่ออากาศหนาวจะเกาะกลุ่มเบียดกันเพื่อสร้างความอบอุ่น"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "藏入黑暗",
			th: "ซ่อนในเงามืด"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "高速飛行",
			th: "บินเร็วจี๋"
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