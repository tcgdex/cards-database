import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 達摩狒狒"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "性情敦厚的大力士。會一口氣凍住頭上的雪球，然後用頭錘撞擊對手。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "細雪"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "達摩頭擊"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則這個招式只需要1個【水】能量即可使用。"
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card