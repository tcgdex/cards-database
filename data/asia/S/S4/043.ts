import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夜巡靈"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說一旦發現不聽話的孩子，牠就會在深夜裡把那個孩子帶去某個不知名的地方。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "預知未來"
		},

		effect: {
			'zh-tw': "查看自己或者對手的牌庫上方4張卡，以任意順序排列，放回牌庫上方。"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card