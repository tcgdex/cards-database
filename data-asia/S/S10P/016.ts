import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "可達鴨"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "常年為頭痛所苦。疼痛增強之時， 蘊藏於體內之力將失控爆發。 故吾人正在摸索舒緩頭痛之法。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "發呆"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將這隻寶可夢恢復「10」HP。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "衝撞"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card