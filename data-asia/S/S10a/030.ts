import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 索羅亞克"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "瘋狂舞動白髮的姿態如同死神。在足以撕裂己身的深刻仇怨驅使下， 抱定同歸於盡之心襲殺仇敵。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "破滅詛咒"
		},

		effect: {
			'zh-tw': "在下個對手的回合結束時，將受到這個招式的寶可夢【氣絕】。"
		}
	}, {
		name: {
			'zh-tw': "喚回"
		},

		effect: {
			'zh-tw': "從自己的棄牌區任意選擇1張卡，在給對手看過後加入手牌。"
		},

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

	retreat: 2,
	regulationMark: "F"
}

export default card