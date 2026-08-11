import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏瑪然特"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "與眾人之王協力拯救了伽勒爾的寶可夢。吸收金屬來進行戰鬥。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "剛健之盾"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-20」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "鐵頭碰"
		},

		damage: 130,
		cost: ["Metal", "Metal", "Metal", "Colorless"]
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