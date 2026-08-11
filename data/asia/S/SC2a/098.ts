import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "叉字蝠V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "暗夜能源"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從牌庫抽卡直到自己的手牌滿6張為止。在這個回合，若已經使出了其他的「暗夜能源」，則這個特性無法使用。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "毒牙"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 70,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
