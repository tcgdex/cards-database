import { Card } from "../../../interfaces"
import Set from "../svB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "茸茸羊"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "電氣發電機"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的棄牌區選擇1張【雷】能量卡，附於備戰寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "電球"
		},

		damage: 50,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card