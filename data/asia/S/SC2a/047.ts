import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多多冰"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "透過喝下乾淨的水來讓自己的冰雪身軀成長。天氣好的時候很少看到牠。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "嚴寒頭錘"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
