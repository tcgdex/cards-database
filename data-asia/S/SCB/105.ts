import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大舌舔"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		'zh-tw': "比起手腳，牠更加擅長使用舌頭。就算是１粒小小的豆子，牠也能靈巧地用舌頭撿起來。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "大舌選擇"
		},

		effect: {
			'zh-tw': "對手將對手自己的牌庫上方3張卡丟棄。或者對手選擇3張對手自己的手牌，將其丟棄。"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "抛擲"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card