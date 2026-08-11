import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電擊獸"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'zh-tw': "人們經常把停電的原因歸咎到牠們身上，但其實大多是電力公司的過失。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "揮大拳"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「揮大拳」。"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card