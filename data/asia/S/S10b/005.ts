import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿羅拉 椰蛋樹V"
	},

	illustrator: "MUGENUP",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "悠悠成長"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則從自己的牌庫選擇最多5張【草】能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "嗡嗡頭擊"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢，受到這隻寶可夢身上附加的【草】能量的數量×30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card