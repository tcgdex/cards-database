import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙奈朵"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		'zh-tw': "如果是為了保護訓練家，牠會不惜用盡自己的精神力量製造出小型黑洞。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "奧祕閃耀"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。查看自己的牌庫上方2張卡，選擇其中任意數量的基本能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡加入手牌。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "腦力波"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【超】能量的數量×30點傷害。"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card