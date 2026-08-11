import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "摩托蜥"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "似乎自古就會讓人類坐在背上。１萬年前的 壁畫上描繪著該模樣。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "突擊"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card