import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狡猾天狗"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		'zh-tw': "過去被視為森林之神而受到畏懼的寶可夢。有著讀取對手想法並搶先一步行動的能力。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "天狗替身"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的手牌的支援者卡的效果全部改為「從自己的牌庫抽出3張卡」。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "圓扇龍捲風"
		},

		effect: {
			'zh-tw': "若希望，將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		},

		damage: 110,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card