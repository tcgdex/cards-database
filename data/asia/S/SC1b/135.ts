import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "古月鳥V"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "鳥嘴捕捉"
		},

		effect: {
			'zh-tw': "從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "噴吐射擊"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄，對手的1隻寶可夢受到160點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
