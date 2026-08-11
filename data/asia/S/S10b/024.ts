import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "急凍鳥"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "藍色的美麗羽毛據說是由冰構成的。會搖曳著長長的尾巴飛過雪山。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "冰之象徵"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的【水】屬性的【基礎】寶可夢（「急凍鳥」 除外）使用的招式，對對手的戰鬥寶可夢造成的傷害「+10」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "凍凝之風"
		},

		damage: 110,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card