import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 裙兒小姐"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "據考察，雪山深處的棲息環境為其帶來了發達的腳力。會從頭冠般的花中發出鼓舞周遭夥伴的香氣。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "充溢香氣"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【草】能量卡，以任意方式附於備戰寶可夢身上。並且重洗牌庫。"
		}
	}, {
		name: {
			'zh-tw': "迴轉踢"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card