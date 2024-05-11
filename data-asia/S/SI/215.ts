import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "嘎啦嘎啦"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "戰鬥盔甲"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。"
		}
	}, {
		name: {
			'zh-tw': "骨頭回力鏢"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×90點傷害。"
		},

		damage: "90×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card