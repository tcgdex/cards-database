import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "列陣兵V"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "鐵壁之陣"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的場上的，所有名稱中有「列陣兵」的寶可夢，受到對手的寶可夢招式的傷害「-20」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "終極衝擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 210,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card