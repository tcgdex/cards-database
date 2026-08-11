import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布莉姆溫"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		'zh-tw': "由於會朝四周釋放足以引起頭痛的精神力量，其他生物都躲得遠遠的。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "危害意識"
		},

		effect: {
			'zh-tw': "當這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害時，將使用招式的寶可夢【混亂】。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "生命之紗"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 100,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
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