import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "急凍鳥"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "藍色的美麗羽毛據說是由冰構成的。會搖曳著長長的尾巴飛過雪山。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "冰之翼"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "狂野冰凍"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到50點傷害。將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 70,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card