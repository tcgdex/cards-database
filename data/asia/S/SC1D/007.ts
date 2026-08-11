import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風妖精"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'zh-tw': "喜歡到處撒棉花搗蛋。沾水之後就會變重而動彈不得，只能聽天由命。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "棉流"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢與附加的卡，全部放回對手的牌庫並重洗。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "綠葉舞步"
		},

		damage: 50,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
