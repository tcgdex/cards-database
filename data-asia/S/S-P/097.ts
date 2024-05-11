import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瓦斯彈"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "污濁的空氣是牠的美味大餐。據說在昔日的伽勒爾地區曾經存在著更多的瓦斯彈。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "濁霧"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card