import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 泥巴魚"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		'zh-tw': "棲息在富含鐵質的泥巴裡，因此獲得了 結實堅固的鋼鐵身軀。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "場地陷阱"
		},

		effect: {
			'zh-tw': "將場上的對手的競技場卡丟棄。有丟棄的情況下，選擇2個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 20,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "撞擊"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card