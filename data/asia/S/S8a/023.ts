import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飛翔皮卡丘V"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "電擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "飛翔"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card