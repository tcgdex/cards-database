import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "圈圈熊"
	},

	illustrator: "Hasegawa Saki",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		'zh-tw': "雖然體型很大，但很擅長爬樹，會在樹上進食和睡覺。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈開"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "擊倒"
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card