import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒノアラシ",
		'zh-tw': "火球鼠"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [155],
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "ジョウトの地に 棲みし ポケモン。 小胆な 気性ゆえ 常より 身を 丸めるが 秘めたる 火力は 強烈。",
		'zh-tw': "棲息在城都地區的寶可夢。 生性膽小，總是將身子縮成一團， 但其實體內蘊藏著強大的火力。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "エネチャージ",
			'zh-tw': "蓄能量"
		},

		effect: {
			ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "ひだね",
			'zh-tw': "火種"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650969,
				tcgplayer: 569764,
				cardtrader: 234075,
			},
		},
	]
}

export default card