import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小仙奶"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說有小仙奶現身的蛋糕店保證能生意興隆。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "引路"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "衝撞"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card