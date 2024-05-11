import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙尾怪手"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "不管做什麼事都會用到尾巴。如果牠用２根尾巴抱緊你，就代表牠真的和你很親近。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "猴技"
		},

		effect: {
			'zh-tw': "當這隻寶可夢受到招式的傷害時，己方擲1次硬幣。若為正面，則這隻寶可夢不會受到那個傷害。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "投擲MAX"
		},

		effect: {
			'zh-tw': "擲與這隻寶可夢身上附加的能量的數量相同次數的硬幣，造成正面出現的次數×60點傷害。"
		},

		damage: "60×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card