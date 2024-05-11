import { Card } from "../../../interfaces"
import Set from "../SP6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒼響VSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "破壞刀鋒"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力、對手的戰鬥寶可夢身上的附加效果。"
		},

		damage: 200,
		cost: ["Metal", "Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]劍之星星"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		damage: 310,
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card