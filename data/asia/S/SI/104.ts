import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰伊布VMAX"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "水晶之幕"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的「寶可夢【VMAX】」（「冰伊布【VMAX】」 除外）招式的傷害。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極巨冰柱"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 150,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card