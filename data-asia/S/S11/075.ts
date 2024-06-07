import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨金怪"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		'zh-tw': "當氣溫下降到低於冰點時，磁力就會變強。因此棲息在 雪山裡的巨金怪非常有活力。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "緊急進場"
		},

		effect: {
			'zh-tw': "在自己的回合開始，從牌庫抽出了這張卡時，若自己的備戰區有空位，則在加入手牌前可使用1次。將這張卡放置於自己的備戰區。然後，從自己的牌庫抽出3張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "彗星拳"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢「彗星拳」的傷害「+100」點。"
		},

		damage: 100,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card