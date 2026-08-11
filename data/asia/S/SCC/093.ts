import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "好勝毛蟹"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'zh-tw': "習慣不經過大腦先動手打了再說。以前曾有過用連續不斷的拳擊把雪崩推回去的紀錄。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "雙重金勾臂"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×90點傷害。"
		},

		damage: "90×",
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "蟹鉗錘"
		},

		damage: 130,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card