import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雨翅蛾"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "用觸角上的眼珠花紋威嚇敵人。用４根翅膀前後左右靈活飛行。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "花紋恐嚇"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢，無法從手牌使出並附上能量。"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "急速折返"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
