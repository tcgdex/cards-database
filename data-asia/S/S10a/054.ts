import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 黏美兒"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'zh-tw': "性情陰沉。據考察，洗翠地區的水中含有的鐵質對皮膚的黏液產生作用， 使其變化成了金屬外殼。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "硬化"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-50」點。"
		}
	}, {
		name: {
			'zh-tw': "重摑"
		},

		damage: 40,
		cost: ["Water", "Metal"]
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card