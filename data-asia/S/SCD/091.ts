import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "耿鬼VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Darkness"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "恐慌恐懼"
		},

		effect: {
			'zh-tw': "造成對手的場上的「寶可夢【V】・【GX】」的數量×60點傷害。"
		},

		damage: "60×",
		cost: ["Darkness", "Darkness"]
	}, {
		name: {
			'zh-tw': "超極巨大口吞噬"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 250,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card