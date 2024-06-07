import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "薩戮德"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "集結成群生活在密林裡。攻擊性很強，令棲息在森林的寶可夢們畏懼不已。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拖出"
		},

		effect: {
			'zh-tw': "選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到20點傷害。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "三連鞭"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×70點傷害。"
		},

		damage: "70×",
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card