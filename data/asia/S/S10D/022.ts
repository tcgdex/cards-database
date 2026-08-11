import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉艾勒奇"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'zh-tw': "由電能凝聚而成的寶可夢。據說拿下牠身上的圓環後， 就會解放牠潛藏的力量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電磁聲納"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張訓練家卡，在給對手看過後加入手牌。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "目標伏特"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的2個【雷】能量丟棄，對手的1隻備戰寶可夢受到120點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card