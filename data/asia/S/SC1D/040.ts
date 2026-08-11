import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "千面避役"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		'zh-tw': "身上隱藏著多種特殊能力，例如從手指噴射水流，以及用背部的翼膜滑翔等等。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "消音彈"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "水炮狙擊"
		},

		effect: {
			'zh-tw': "若希望，選擇1個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。"
		},

		damage: 100,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
