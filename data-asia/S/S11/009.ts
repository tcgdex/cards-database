import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "敗露球菇"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "會噴出帶有毒性的孢子。如果不盡快洗掉的話， 就會從那裡長出蘑菇來喔。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "整人孢子"
		},

		effect: {
			'zh-tw': "在對手的回合，當這張卡因對手的招式・特性・物品卡・支援者卡的效果而從手牌被丟棄時，將對手的手牌全部丟棄。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "昏睡之錘"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card