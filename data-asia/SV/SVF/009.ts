import { Card } from "../../../interfaces"
import Set from "../SVF"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大尾狸"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "用樹幹和泥巴築起水壩，堵住河流建造住所。 以勤勞而聞名。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "勤勞門牙"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次。從牌庫抽卡直到自己的手牌滿5張為止。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "長尾擊碎"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 100,
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