import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "千針魚"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "對手的體型越是巨大，牠就會喝下越多的水使身體膨脹，彷彿馬上就要破裂一般。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "毒刺"
		},

		effect: {
			'zh-tw': "當這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害時，將使用招式的寶可夢【中毒】。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "毒液衝擊"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加60點傷害。"
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
