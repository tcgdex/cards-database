import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "穿山王"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "擅長用厚實的爪子來爬樹。也有許多穿山王會直接把樹上當成睡覺的地方。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "挖出攻擊"
		},

		effect: {
			'zh-tw': "從自己的棄牌區任意選擇1張卡，在給對手看過後加入手牌。"
		},

		damage: 60,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card