import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鴨嘴炎獸"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'zh-tw': "大口吸氣時，肚子裡的火焰就會燃燒得更旺盛，達到攝氏２０００度。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "百萬噸重拳"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "伏特爆發"
		},

		effect: {
			'zh-tw': "若自己的備戰區有「電擊魔獸」，則增加120點傷害。"
		},

		damage: "120+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card