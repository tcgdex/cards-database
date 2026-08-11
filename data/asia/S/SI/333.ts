import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幸福蛋"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "渾圓高手"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的場上所有持有「一同滾動」招式的寶可夢，不會受到對手的「寶可夢【VMAX】」招式的傷害。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "一同滾動"
		},

		effect: {
			'zh-tw': "造成自己的備戰區的，持有「一同滾動」招式的寶可夢的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card