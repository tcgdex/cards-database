import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霜奶仙VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "妝點"
		},

		effect: {
			'zh-tw': "附給自己的所有備戰寶可夢各1張牌庫的【超】能量卡。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "超極巨甜奶泡擊"
		},

		effect: {
			'zh-tw': "將自己的場上寶可夢身上附加的任意數量的能量丟棄，造成其張數×60點傷害。"
		},

		damage: "60×",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
