import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飄浮泡泡 太陽的樣子"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "暴露在烈日下就會變成這個樣子。如果去摸牠熱烘烘的身體，會感覺到乾巴巴的。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "看天"
		},

		effect: {
			'zh-tw': "若自己的棄牌區有8張以上的「競技場」卡，則這隻寶可夢使用招式所需的能量全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "高氣壓爆破"
		},

		effect: {
			'zh-tw': "將場上的「競技場」丟棄。若無法丟棄，則這個招式失敗。"
		},

		damage: 150,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card