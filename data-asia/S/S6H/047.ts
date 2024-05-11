import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "酷豹V"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "暗影拆裂"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與附加的卡，全部放回手牌。"
		},

		damage: 110,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card