import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熱帶龍"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "脖子上的美味水果很受歡迎。在溫暖的地區有很多 養殖熱帶龍的牧場。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "治癒樹蔭"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有【草】能量的寶可夢不會【混亂】，受到的【混亂】會全部恢復。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "利刃切割"
		},

		damage: 100,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card