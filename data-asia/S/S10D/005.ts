import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "百合根娃娃"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "頭上的葉片是人們愛用的藥材。 在太陽下曬乾後煎煮服用， 雖然味苦但能有效地消除疲勞。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "旋轉迴旋"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card