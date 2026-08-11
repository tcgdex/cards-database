import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "音箱蟀V"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "激動舞台"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從牌庫抽卡直到自己的手牌滿3張為止。若這隻寶可夢在戰鬥場上，則抽卡直到滿4張為止。在這個回合，若已經使出了其他的「激動舞台」，則這個特性無法使用。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "十字剪"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card