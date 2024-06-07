import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨鍛匠"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		'zh-tw': "智商高超，性格豪邁。 會用錘子打飛岩石來攻擊 飛在空中的鋼鎧鴉。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "拍落"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。"
		},

		damage: 40,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "狂野壓制"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到60點傷害。"
		},

		damage: 220,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card