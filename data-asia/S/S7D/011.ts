import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "胖可丁"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "生氣時會拼命吸氣，讓自己的身體不斷膨脹。有時甚至能脹大到原來的２０倍。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "發現寶物"
		},

		effect: {
			'zh-tw': "從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "巨聲"
		},

		damage: 90,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card