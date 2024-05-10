import { Card } from "../../../interfaces"
import Set from "../svEM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超夢ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "轉移充能"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【超】能量」卡，以任意方式附於自己的寶可夢身上。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "光子強念"
		},

		effect: {
			'zh-tw': "增加自己的所有寶可夢身上附加的【超】能量的數量×30點傷害。"
		},

		damage: "10+",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card