import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "好勝毛蟹",
		'zh-cn': "好勝毛蟹",
		ja: "ケケンカニ"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		'zh-tw': "拳擊雖強，動作卻慢。 會從口裡噴出結冰的泡沫 來封住對手的行動。",
		'zh-cn': "拳擊雖強，動作卻慢。 會從口裡噴出結冰的泡沫 來封住對手的行動。",
		ja: "パンチは 強力だが 動きが 遅い。 口から 氷の 泡を 吹いて 相手の 動きを 止める。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "揮大拳",
			'zh-cn': "揮大拳",
			ja: 'おおぶりパンチ'
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「揮大拳」。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用「揮大拳」。",
			ja: '次の自分の番、このポケモンは「おおぶりパンチ」が使えない。'
		},

		damage: 250,
		cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [740],

	abilities: [{
		type: "Ability",

		name: {
			ja: "したごしらえ",
			'zh-tw': "‌[特性]事先準備",
			'zh-cn': "‌[特性]事先準備"
		},

		effect: {
			ja: "自分のトラッシュにある「ハイダイ」の枚数ぶん、このポケモンがワザを使うためのエネルギーは少なくなる。",
			'zh-tw': "這隻寶可夢使用招式所需的【無】能量，減少自己的棄牌區的「海岱」的張數。",
			'zh-cn': "這隻寶可夢使用招式所需的【無】能量，減少自己的棄牌區的「海岱」的張數。"
		}
	}]
}

export default card
