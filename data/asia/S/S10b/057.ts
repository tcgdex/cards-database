import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長尾怪手"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "會從樹上尋找獵物。只要發現自己愛吃的甜竹竹，就會興奮地飛撲過去。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "動來動去"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "巴掌"
		},

		damage: 30,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card