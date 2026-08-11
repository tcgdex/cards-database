import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 喵頭目"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "有著十分好戰的性格。頭上像鐵頭盔一樣的東西其實是牠硬化後的體毛。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "鋼之意志"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的【鋼】寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+20」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "金屬爪"
		},

		damage: 70,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card