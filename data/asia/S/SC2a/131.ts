import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋼鎧鴉"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		'zh-tw': "在伽勒爾地區的空中所向無敵。牠那黑得發亮的鋼鐵之軀有著讓敵人畏懼的威懾力。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "飛翔計程車"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。選擇自己的1隻寶可夢（「鋼鎧鴉」除外），將那隻寶可夢與附加的卡，全部放回手牌。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "爆破之風"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
