import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "自爆磁怪"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		'zh-tw': "據說牠頭上的天線會接收來自宇宙的電波， 讓牠被未知的對象控制。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "終極磁鐵"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。查看自己的牌庫上方6張卡，從其中選擇任意數量的【鋼】能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡放回牌庫並重洗。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "强力光束"
		},

		damage: 120,
		cost: ["Metal", "Colorless", "Colorless"]
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
	regulationMark: "F"
}

export default card