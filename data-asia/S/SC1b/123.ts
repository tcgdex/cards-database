import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "豆豆鴿"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "會出現在人類生活的地方。一旦撒出飼料就會有好幾百隻豆豆鴿聚集而來，千萬要小心。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鳥笛"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張抵抗力為【鬥】屬性的寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "銳利羽"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
