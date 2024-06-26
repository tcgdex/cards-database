import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡璞・哞哞"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'zh-tw': "拔出巨大的樹木，轟轟地來回揮舞。 會讓草木茂盛生長，再吸收其中的能量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "木槌"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 220,
		cost: ["Grass", "Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card