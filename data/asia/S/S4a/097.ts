import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙包蛇"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "一邊挖洞一邊把吃掉的沙子儲存在頸部的囊裡。囊裡面能裝進８公斤的沙子。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "潑沙"
		},

		effect: {
			'zh-tw': "在下個對手的回合，當受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card