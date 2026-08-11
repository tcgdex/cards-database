import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "優雅貓"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "愛管閒事"
		},

		effect: {
			'zh-tw': "查看對手的手牌，選擇其中1張卡，放回對手的牌庫下方。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "連環巴掌"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×50點傷害。"
		},

		damage: "50×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card