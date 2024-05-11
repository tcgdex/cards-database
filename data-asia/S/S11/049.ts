import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花療環環"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "會用藤蔓摘花來裝飾自己。不知為何，黏在牠身上的 花朵都不會枯萎。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "選花"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。查看自己的牌庫上方2張卡，選擇其中1張，加入手牌。將剩餘卡放置於放逐區。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "迴轉攻擊"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card