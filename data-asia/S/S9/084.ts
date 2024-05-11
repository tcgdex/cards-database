import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿爾宙斯VSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "星星誕生"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "三重新星"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張基本能量卡，以任意方式附於自己的「寶可夢【V】」身上。並且重洗牌庫。"
		},

		damage: 200,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card