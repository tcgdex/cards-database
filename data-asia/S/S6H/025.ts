import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰寶"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "棲息在極其寒冷的地域。會把自己的腳凍在冰岩怪的背上固定起來。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "自然回復"
		},

		effect: {
			'zh-tw': "每次從自己的手牌將能量附於這隻寶可夢身上時，都將這隻寶可夢的特殊狀態全部恢復。"
		}
	}, {
		name: {
			'zh-tw': "幸福轟炸"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的能量的數量×30點傷害。若希望，在造成傷害後，從棄牌區選擇最多3張能量卡，附於這隻寶可夢身上。"
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card