import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "九尾"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'zh-tw': "聰明伶俐但很會記仇。據說如果敢亂抓牠的尾巴，牠就會纏著你作祟１０００年。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "靈異火焰"
		},

		damage: 70,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card