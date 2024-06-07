import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "來電汪",
		ja: "ワンパチ"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "因為想要得到零食而幫助人類工作的貪吃鬼。 總是帶著電火花跑來跑去。",
		ja: "おやつに 釣られて 人の 仕事を 手伝う 食いしん坊。 パチパチと 電気を まとって ひた走る。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "尋球",
			ja: "ボールさがし"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的棄牌區選擇「精靈球」卡與「超級球」卡最多各1張，在給對手看過後加入手牌。",
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分のトラッシュから「モンスターボール」と「スーパーボール」をそれぞれ1枚まで選び、相手に見せて、手札に加える。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "活蹦亂跳",
			ja: "はねまわる"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [835]
}

export default card