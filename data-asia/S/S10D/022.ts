import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "レジエレキ",
		'zh-tw': "雷吉艾勒奇"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [894],
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "電気エネルギーの 塊。 体の リングを 外すと 秘めた 力が 解き放たれるらしい。",
		'zh-tw': "由電能凝聚而成的寶可夢。據說拿下牠身上的圓環後， 就會解放牠潛藏的力量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "でんじソナー",
			'zh-tw': "電磁聲納"
		},

		effect: {
			ja: "自分のトラッシュからトレーナーズを1枚選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇1張訓練家卡，在給對手看過後加入手牌。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "ターゲットボルト",
			'zh-tw': "目標伏特"
		},

		effect: {
			ja: "このポケモンについている{L}エネルギーを2個トラッシュし、相手のベンチポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "將這隻寶可夢身上附加的2個【雷】能量丟棄，對手的1隻備戰寶可夢受到120點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650982,
				tcgplayer: 569777,
				cardtrader: 234088,
			},
		},
	]
}

export default card