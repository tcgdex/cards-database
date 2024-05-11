import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 呆呆獸"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "牠以只生長在伽勒爾地區的植物的種子為食，因此尾巴是辣味的。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "引動之尾"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card