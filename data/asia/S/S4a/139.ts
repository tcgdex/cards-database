import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏瑪然特V"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "不屈之盾"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的「寶可夢【VMAX】」招式的傷害。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "進擊衝撞"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的特殊能量，將其丟棄。"
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

	retreat: 2,
	regulationMark: "D"
}

export default card