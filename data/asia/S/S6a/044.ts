import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪夏多"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "會潛進人或寶可夢的影子裡。能理解潛入對象的心情，並複製對方的能力。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "迅速搜尋"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張「連擊」卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "暗影閃爍"
		},

		effect: {
			'zh-tw': "在下個自己的回合，受到這個招式的寶可夢【氣絕】時，多獲得1張獎賞卡。"
		},

		damage: 10,
		cost: ["Colorless"]
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
	regulationMark: "E"
}

export default card