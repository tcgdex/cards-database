import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鳳王"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "據說會閃耀著七彩翅膀，出現在正直的訓練家面前。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "神聖之火"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "大字爆炎"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card