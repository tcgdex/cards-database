import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "九尾"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "聰明伶俐但很會記仇。據說如果敢亂抓牠的尾巴，牠就會纏著你作祟１０００年。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "九尾狐小徑"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有【火】能量的寶可夢【撤退】所需的能量減少2個。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "火之尾"
		},

		damage: 60,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card