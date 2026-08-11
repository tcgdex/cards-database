import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電擊魔獸"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		'zh-tw': "只要１隻電擊魔獸就能提供整座大都市所有建築物一整年所需的電力。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "回轉攻擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "閃電上投"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「閃電上投」。"
		},

		damage: 180,
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card