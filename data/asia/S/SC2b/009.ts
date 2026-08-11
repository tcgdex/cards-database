import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火焰雞"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		'zh-tw': "有著強韌的下盤，連３０層大樓都能輕鬆躍過。會用火焰拳把對手燒焦。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "雙重屬性"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，改為【火】與【鬥】2種屬性。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "渦輪衝鋒"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張基本能量卡，附於備戰寶可夢身上。"
		},

		damage: 130,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
