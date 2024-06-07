import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熊寶寶"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "總是舔舐著滲入掌中的香甜蜜汁。三蜜蜂積蓄在巢中的花蜜時常 被牠毫不客氣地佔為己有。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撿飼料"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則從自己的棄牌區選擇1張物品卡，在給對手看過後加入手牌。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "豎爪"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card