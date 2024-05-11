import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "基拉祈"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "每１０００年讓牠聽一次清澈的歌聲，就能讓牠維持７天的清醒。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "夢之預言"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時，可使用1次。查看自己的牌庫上方2張卡，選擇其中1張，加入手牌。將剩餘卡放回牌庫上方。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "奇幻之星"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多7張基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Psychic", "Fighting", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
