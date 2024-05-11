import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝甜冷美后"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'zh-tw': "讓人畏懼的寶可夢。擁有苗條的雙腿和殘忍的心，會毫不留情地狠踩敵人。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "優雅治癒"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。將自己的所有寶可夢各恢復「20」HP。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "芳香射擊"
		},

		effect: {
			'zh-tw': "將這隻寶可夢的特殊狀態全部恢復。"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card