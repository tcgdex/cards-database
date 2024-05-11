import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噴火龍"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		'zh-tw': "會噴出彷彿連岩石都能燒焦的灼熱火焰。有時會引發森林火災。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "猛烈燃燒"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的場上寶可夢身上附加的基本【火】能量，各視為提供2個【火】能量。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "閃焰衝鋒"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的【火】能量全部丟棄。"
		},

		damage: 170,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card