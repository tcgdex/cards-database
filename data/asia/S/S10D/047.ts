import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉斯奇魯"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "構成牠身體的神奇物質具有能夠伸縮的柔軟性， 但卻比任何金屬都還要堅韌。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雷吉之門"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "重磅衝撞"
		},

		effect: {
			'zh-tw': "減少對手的戰鬥寶可夢【撤退】所需的能量的數量×50點傷害。"
		},

		damage: "220-",
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card