import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑夜魔靈"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		'zh-tw': "沒人知道牠是否擁有意識。會從來自靈界的電波中接受指示，將人和寶可夢帶走。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "幽靈漂白"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，雙方的場上寶可夢身上附加的特殊能量的效果全部消除，視為提供1個【無】能量。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "陰森射擊"
		},

		damage: 120,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card