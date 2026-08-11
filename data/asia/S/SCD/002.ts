import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵甲蛹"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "堅硬身軀"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-20」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "衝撞"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card