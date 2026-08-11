import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴飛龍VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "雙音波"
		},

		effect: {
			'zh-tw': "對手的2隻寶可夢各受到40點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "極巨之翼"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「極巨之翼」。"
		},

		damage: 240,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
