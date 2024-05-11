import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "三蜜蜂"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "３隻一直都在一起，但每一隻對花蜜的 喜好卻略有不同。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蜜之搬運"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張物品卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "蟲咬"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card