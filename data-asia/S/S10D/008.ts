import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 裙兒小姐VSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "星星芬香"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。從自己的牌庫選擇【草】寶可夢卡與【草】能量卡合計最多5張，在給對手看過後加入手牌。並且重洗牌庫。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "燕式旋轉"
		},

		effect: {
			'zh-tw': "若希望，選擇1個這隻寶可夢身上附加的能量，放回手牌。這個情況下，增加100點傷害。"
		},

		damage: "130+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card