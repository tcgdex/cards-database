import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪絨蛾"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "翅膀的溫度是零下１８０度。當牠飛過山野時，帶有冷氣的鱗粉會像下雪般地飄落下來。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "冰雪之舞"
		},

		effect: {
			'zh-tw': "在自己的回合時，可不限次數使用。從自己的手牌選擇1張【水】能量卡，附於備戰區的【水】寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極光束"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
