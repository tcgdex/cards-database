import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "胡帕V"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "雙面"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，改為【超】與【惡】2種屬性。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "暗影衝擊"
		},

		effect: {
			'zh-tw': "在自己的1隻寶可夢身上放置3個傷害指示物。"
		},

		damage: 170,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card