import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蓮帽小童"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "傍晚時開始活動的夜行性寶可夢。喜歡吃河底的水苔。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "首發進場"
		},

		effect: {
			'zh-tw': "在自己的回合開始，從牌庫抽出了這張卡時，若自己的備戰區有空位，則在加入手牌前可使用1次。將這張卡放置於自己的備戰區。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "亂抓"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×40點傷害。"
		},

		damage: "40×",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
