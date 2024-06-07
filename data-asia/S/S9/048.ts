import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風鈴鈴",
		ja: "チリーン"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "擁有超音波的叫聲。輕飄飄地浮起來， 乘著風旅行到遠方。",
		ja: "超音波の 鳴き声を 持つ。 ふわふわと 浮かび 風に 乗って 長い 距離を 旅する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鮮明音色",
			ja: "あざやかなねいろ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張特殊能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
			ja: "自分の山札から特殊エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "垂吊",
			ja: "ぶらさがる"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [358]
}

export default card