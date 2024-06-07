import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泡沫栗鼠"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "用尾巴來清掃灰塵。雖說能幫忙打掃是件好事，但牠的潔癖也會讓人感到棘手。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "偷看"
		},

		effect: {
			'zh-tw': "查看對手的牌庫上方1張卡，回復原樣。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "掃尾拍打"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card