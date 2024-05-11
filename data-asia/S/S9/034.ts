import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷丘V"
	},

	illustrator: "MUGENUP",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "急速蓄電"
		},

		effect: {
			'zh-tw': "這個招式在先攻玩家的最初回合也可使用。從自己的牌庫選擇1張【雷】能量卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "極限電光"
		},

		effect: {
			'zh-tw': "將自己的場上寶可夢身上附加的任意數量的【雷】能量卡丟棄，造成其張數×60點傷害。"
		},

		damage: "60×",
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card