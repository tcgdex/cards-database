import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛崖蟹ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "反擊鉗"
		},

		effect: {
			'zh-tw': "當這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害時，選擇1個使用招式的寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "落下壓制"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加80點傷害。"
		},

		damage: "100+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card