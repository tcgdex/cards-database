import { Card } from "../../../interfaces"
import Set from "../SJ"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒼響V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "不撓之劍"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次，若使用，則自己的回合結束。查看自己的牌庫上方3張卡，選擇其中任意數量的【鋼】能量卡，附於這隻寶可夢身上。將剩餘卡加入手牌。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "無畏聖劍"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 230,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card