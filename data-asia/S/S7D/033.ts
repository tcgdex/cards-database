import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狐大盜"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "靠著輕盈的身體和銳利的爪子到處去偷食物和蛋。逐電犬是牠的天敵。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "漏接之手"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。雙方玩家各將自己的手牌全部翻回反面並重洗，放回牌庫下方。然後，各從牌庫抽出4張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "尾擊"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card