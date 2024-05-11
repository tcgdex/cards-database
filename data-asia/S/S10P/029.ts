import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "由克希"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說因為由克希的誕生， 使人們的生活變得 豐富多彩的智慧才得以出現。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "智慧指引"
		},

		effect: {
			'zh-tw': "從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "精神射擊"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card