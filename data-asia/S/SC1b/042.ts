import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鴨嘴炎獸"
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'zh-tw': "棲息在火山口。據說１座火山只有一對鴨嘴炎獸。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "爆破拳"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "大地灼燒"
		},

		effect: {
			'zh-tw': "將雙方的牌庫上方各1張卡丟棄，增加其中能量卡的張數×100點傷害。"
		},

		damage: "80+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
