import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "古空棘魚"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "從１億年前就長這個樣子。因為體內積存著厚厚的脂肪，所以能承受深海的水壓。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "化石搜索"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張「稀有化石」卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "衝浪"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
