import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沼王"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "就算腦袋撞上船底或河裡的岩石，也完全不會去在意，悠然自在地游泳的悠閒寶可夢。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "敲擊"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "浮躁衝擊"
		},

		effect: {
			'zh-tw': "若自己剩餘獎賞卡的張數為6張・4張・2張，則這個招式失敗。"
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
