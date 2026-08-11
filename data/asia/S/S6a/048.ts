import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "月亮伊布VMAX"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "黑暗信號"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極巨惡霸"
		},

		damage: 160,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card