import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火伊布"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'zh-tw': "當火焰在體內積蓄時，火伊布的體溫也會隨之上升到最高９００度。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "灼熱"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "熱辣熱辣"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。然後，選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card