import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "甲殼龍"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'zh-tw': "棲息在洞窟深處。總是躲在堅硬的外殼裡，夢想著飛上天空的那一天。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "堅硬捲筒"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		},

		damage: 50,
		cost: ["Fire", "Water"]
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card