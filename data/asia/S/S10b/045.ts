import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美錄坦"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "身體是融化成液狀的鋼鐵。 能夠將地底的鐵或其他金屬 溶解後吸收進體內。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card