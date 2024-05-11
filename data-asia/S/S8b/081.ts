import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霜奶仙"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "當牠感到幸福的時候，手中產生出的鮮奶油會變得更加香濃甜美。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "追加點餐"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，就算使用了自己的「老闆」，自己的回合也不會結束。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "彩虹口味"
		},

		effect: {
			'zh-tw': "增加自己的場上寶可夢身上附加的基本能量的屬性種類的數量×40點傷害。"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card