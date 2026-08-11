import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "堅盾劍怪"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		'zh-tw': "處於防禦狀態時，會用鋼之身體和靈力的屏障來減弱一切的攻擊。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "大盾牌"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢受到對手的寶可夢招式的傷害「-30」點。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "力量刀鋒"
		},

		damage: 130,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card