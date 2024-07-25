import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "厄鬼椪 礎石面具ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "礎石之勢"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的擁有特性的寶可夢招式的傷害。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "打爆"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力與對手的戰鬥寶可夢身上的附加效果。"
		},

		damage: 140,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card