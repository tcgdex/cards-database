import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "引夢貘人"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "為了幫助那些晚上失眠的人，也有些引夢貘人會到 醫院去協助醫生。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "幻迷呼喚"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【1階進化】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "意念頭錘"
		},

		damage: 90,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card