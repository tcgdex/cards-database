import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵蟻"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "巨大的顎部能咬碎岩石。為了不讓沙螺蟒把蛋搶走，會和其他同類一起並肩戰鬥。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "逆境顎"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為【火】寶可夢，則將那隻寶可夢【麻痺】。"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card