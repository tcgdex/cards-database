import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "壺壺"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "甲殼裡儲存著樹果。為了避免受到襲擊，會一動不動地躲在岩石下面。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撿樹果"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多5張基本能量卡，在給對手看過後放回牌庫並重洗。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "綁緊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 50,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
