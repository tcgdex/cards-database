import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "綠毛蟲"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "會從頭部的觸角釋放出強烈的氣味來趕走敵人，藉此保護自己。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "適應進化"
		},

		effect: {
			'zh-tw': "這隻寶可夢就算在自己的最初回合或者剛使出的回合，也可進化。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "咬"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
