import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "眷戀雲V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "愛之守護神"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有【超】能量的寶可夢（「眷戀雲V」 除外），不會受到對手的寶可夢的特性效果影響。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "花開之尾"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張基本能量卡，以任意方式附於備戰寶可夢身上。"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card