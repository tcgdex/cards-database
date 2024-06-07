import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小碎鑽"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "會從嵌在身體的寶石發射出高能量的光線， 將來襲的敵人一掃而盡。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "挖到寶"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張物品卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "力量寶石"
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card