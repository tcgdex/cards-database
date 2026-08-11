import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "迷你冰"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "無法在炎熱的地方生存。會吐出冷氣來降雪，然後窩在積雪裡睡覺。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "凍凝"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
