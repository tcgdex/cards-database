import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蕾冠王"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "擁有治癒與賜恩之力，且滿懷慈愛的寶可夢。在遠古時代曾統治伽勒爾。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "王之號令"
		},

		effect: {
			'zh-tw': "若希望，從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "綻放閃耀"
		},

		effect: {
			'zh-tw': "將自己的所有寶可夢各恢復「20」HP。"
		},

		damage: 90,
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