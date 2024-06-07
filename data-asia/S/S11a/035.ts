import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超夢"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "藉著重組夢幻的基因而誕生。據說有著所有寶可夢中最殘暴的心。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "精神充氣"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張【超】能量卡，附於自己的1隻寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "界限破壞"
		},

		effect: {
			'zh-tw': "若對手剩餘獎賞卡的張數為3張以下，則增加90點傷害。"
		},

		damage: "90+",
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