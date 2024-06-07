import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪童子"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "只能在寒冷的土地上生存。即使在零下１００度的環境下也能充滿活力地到處蹦蹦跳跳。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "冰之氣息"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "雪花冰"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card