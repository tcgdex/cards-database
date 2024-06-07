import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪暴馬"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "會從蹄子釋放出強烈的寒氣。性情暴躁，只要是自己想要 的東西，就會強行去搶奪。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "冰凍在地"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的【基礎】寶可夢，無法使用招式。"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "狂野衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card