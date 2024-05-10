import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "エテボース",
		'zh-tw': "雙尾怪手"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [424],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "なにを するにも シッポを 使う。 ２本の シッポで 抱きしめられたら 本当に 懐かれた 証。",
		'zh-tw': "不管做什麼事都會用到尾巴。如果牠用２根尾巴抱緊你，就代表牠真的和你很親近。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "もってくる",
			'zh-tw': "呼喚"
		},

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ハンドスリング",
			'zh-tw': "手之吊懸"
		},

		damage: "20×",

		effect: {
			ja: "自分の手札の枚数×20ダメージ。",
			'zh-tw': "造成自己的手牌的張數×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card