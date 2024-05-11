import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蓋歐卡"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'zh-tw': "據說會用降下大雨的能力擴張海洋。一直沉睡在海溝的底部。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "召喚潮漩"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【水】能量卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "極限波"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的3個能量放回手牌，對手的1隻寶可夢受到180點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card