import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "豐蜜龍"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "啃果蟲吃了甜蘋果後進化而成。以蟲寶可夢為食，會從體內發出甜甜的香味引誘牠們上鉤。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "美味香氣"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。擲1次硬幣若為正面，則選擇對手的備戰區的1隻【基礎】寶可夢，與戰鬥寶可夢互換。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "日光束"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
