import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑魯加ex"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "邪惡爪"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的【基礎】寶可夢，無法使用招式。"
		},

		damage: 90,
		cost: ["Darkness", "Darkness"]
	}, {
		name: {
			'zh-tw': "追獵獠牙"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 220,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card