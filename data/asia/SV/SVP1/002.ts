import { Card } from "../../../interfaces"
import Set from "../SVP1"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "陸地水母ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "守護菌絲"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有能量卡的寶可夢，不會受到對手的寶可夢使用招式的效果的影響。（已經受到的效果不會消除。）"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "菌落猛攻"
		},

		effect: {
			'zh-tw': "增加自己的備戰區身上附有【草】能量卡的寶可夢的數量×40點傷害。"
		},

		damage: "80+",
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card