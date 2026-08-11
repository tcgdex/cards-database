import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏瑪然特V"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "盾之低吼"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有【鬥】寶可夢，受到對手的「寶可夢【VMAX】」招式的傷害「-20」點。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "重磅衝擊"
		},

		damage: 150,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card