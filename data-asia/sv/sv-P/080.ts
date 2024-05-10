import { Card } from "../../../interfaces"
import Set from "../sv-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "密勒頓"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 110,
	types: ["Dragon"],

	description: {
		'zh-tw': "牠似乎就是古書裡所提及的 鐵大蛇。傳說牠曾用雷電 將大地化成了一片灰。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "暴衝高點"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，以任意方式附於自己的「未來」寶可夢身上。並且重洗牌庫。"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card