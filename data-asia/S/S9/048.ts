import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風鈴鈴"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "擁有超音波的叫聲。輕飄飄地浮起來， 乘著風旅行到遠方。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鮮明音色"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張特殊能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "垂吊"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
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