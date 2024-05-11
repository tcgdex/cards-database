import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "甜冷美后"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'zh-tw': "用又尖又硬的腳尖施展踢擊，朝對手的身體和心靈留下無法磨滅的創傷。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "暗影薄霧"
		},

		effect: {
			'zh-tw': "在下個對手的回合，對手無法從手牌附上「特殊能量」，也無法使出「競技場」。"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "星碎"
		},

		effect: {
			'zh-tw': "在對手的2隻寶可夢身上各放置5個傷害指示物。"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card