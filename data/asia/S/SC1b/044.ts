import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "煤炭龜V"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "火焰柱"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方1張卡丟棄，若那張卡為【火】能量卡，則增加90點傷害。"
		},

		damage: "90+",
		cost: ["Fire", "Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "蒸汽粉碎"
		},

		effect: {
			'zh-tw': "選擇2個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
