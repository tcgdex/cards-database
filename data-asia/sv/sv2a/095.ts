import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "イワーク",
		'zh-tw': "大岩蛇"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [95],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "大きく 丈夫な 体を くねらせ よじらせ 時速８０キロで 地面を 勢いよく 掘り進む。",
		'zh-tw': "彎曲扭動巨大結實的身體，以時速８０公里的 猛烈勢頭挖掘前進。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "どっすんなだれ",
			'zh-tw': "轟隆崩塌"
		},

		damage: "80×",

		effect: {
			ja: "自分の山札を上から5枚トラッシュし、その中にあるにげるためのエネルギーが4個のポケモンの枚数×80ダメージ。",
			'zh-tw': "將自己的牌庫上方5張卡丟棄，造成其中【撤退】所需的能量為4個的寶可夢卡的張數×80點傷害。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ヘビーインパクト",
			'zh-tw': "重磅衝擊"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card