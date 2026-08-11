import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "焚焰蚣"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "發熱時的體溫大約有８００度。會像鞭子那樣彎曲身體，朝著敵人彈跳過去。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "灼燒"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		damage: 50,
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "高溫爬蟲"
		},

		damage: 140,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
