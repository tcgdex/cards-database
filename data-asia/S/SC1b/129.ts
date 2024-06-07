import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "童偶熊"
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'zh-tw': "毛茸茸的毛皮摸起來觸感超群，但粗心大意地向牠伸出手的人基本上都會遭到牠的劇烈反擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "飛撲"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加40點傷害。"
		},

		damage: "40+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
