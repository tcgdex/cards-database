import { Card } from "../../../interfaces"
import Set from "../SLD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠　萬針魚",
		ja: "ヒスイ ハリーマン"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "身上如同槍尖般的針以及兇暴的性情使這種寶可夢得到了海鬼的外號。會吞下毒物作為己身糧食。",
		ja: "槍の如き 針と 凶暴なる 気質にて 海鬼の 異名を 持つ ポケモン。 毒を すすりて 己の 糧とす。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "惡劣壓制",
			ja: "ダーティプレス"
		},

		effect: {
			'zh-tw': "若自己的場上的【惡】能量有3個以上，則增加90點傷害。",
			ja: "自分の場にエネルギーが3個以上あるなら、90ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "突刺",
			ja: "つきさす"
		},

		damage: 70,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	dexId: [904]
}

export default card