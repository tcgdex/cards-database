import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "チオンジェン",
		'zh-tw': "古簡蝸",
		'zh-cn': "古簡蝸"
	},

	illustrator: "danciao",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1001],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "草木の エネルギーを 吸い上げる。 周囲の 森は たちどころに 枯れ果て 田畑は 不作となる。",
		'zh-tw': "會吸取草木的能量， 使周圍的森林霎時乾枯， 田地的農作物歉收。",
		'zh-cn': "會吸取草木的能量， 使周圍的森林霎時乾枯， 田地的農作物歉收。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "グリードハザード",
			'zh-tw': "貪婪危害",
			'zh-cn': "貪婪危害"
		},

		damage: 20,

		effect: {
			ja: "自分の山札の残り枚数が3枚以下なら、相手のベンチポケモン2匹にも、それぞれ120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "若自己的牌庫的剩餘張數為3張以下，則對手的2隻備戰寶可夢也各受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "若自己的牌庫的剩餘張數為3張以下，則對手的2隻備戰寶可夢也各受到120點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "まきこみウィップ",
			'zh-tw': "捲入鞭打",
			'zh-cn': "捲入鞭打"
		},

		damage: 130,

		effect: {
			ja: "自分の山札を上から3枚トラッシュする。",
			'zh-tw': "將自己的牌庫上方3張卡丟棄。",
			'zh-cn': "將自己的牌庫上方3張卡丟棄。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card