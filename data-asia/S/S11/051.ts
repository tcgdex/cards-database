import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "愛管侍"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "擁有高度智能的寶可夢，能透過夥伴間角與角的互碰 來彼此交換訊息。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "伶俐服務"
		},

		effect: {
			'zh-tw': "這個招式在先攻玩家的最初回合也可使用。從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "掌擊"
		},

		damage: 40,
		cost: ["Psychic", "Colorless"]
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