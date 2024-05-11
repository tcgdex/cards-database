import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "逐電犬V"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "輸電"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【雷】能量卡，以任意方式附於備戰寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "雷電風暴"
		},

		effect: {
			'zh-tw': "增加自己的場上寶可夢身上附加的【雷】能量的數量×30點傷害。"
		},

		damage: "10+",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card