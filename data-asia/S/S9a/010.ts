import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "畢力吉翁V"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "春草之風"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有【草】能量的寶可夢不會陷入特殊狀態，並將受到的特殊狀態全部恢復。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "綠寶石利刃"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 200,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card