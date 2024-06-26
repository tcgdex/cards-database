import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "海刺龍"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "是由雄性來養育孩子。 在育兒時，背上刺的 毒素會變得更強更濃。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "援軍"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "銳利鰭"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card