import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "葉伊布"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "從體毛中可檢出近似植物的細胞。 堅硬的尾部能將大樹一刀兩斷， 鋒利程度更勝名刀一籌。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "能量花園"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張各不同屬性的基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "葉子旋風"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card