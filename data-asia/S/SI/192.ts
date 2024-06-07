import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "仙子伊布VMAX"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "貴重之觸"
		},

		effect: {
			'zh-tw': "從自己的手牌選擇1張能量卡，附於自己的備戰寶可夢身上。然後，將那隻寶可夢恢復「120」HP。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "極巨和諧"
		},

		effect: {
			'zh-tw': "增加自己的備戰寶可夢的屬性種類的數量×30點傷害。"
		},

		damage: "70+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card