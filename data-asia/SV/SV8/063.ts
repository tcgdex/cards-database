import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ケンタロス",
		'zh-tw': "帕底亞 肯泰羅",
		'zh-cn': "帕底亞 肯泰羅"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "ぶ厚く 力強い 筋肉と 気性の 荒さが 特徴。 コンバット種と 呼ばれる。",
		'zh-tw': "特徵是厚實有力的肌肉， 以及粗魯暴躁的性格。 這種樣子被稱為鬥戰種。",
		'zh-cn': "特徵是厚實有力的肌肉， 以及粗魯暴躁的性格。 這種樣子被稱為鬥戰種。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "けとばす",
			'zh-tw': "踢飛",
			'zh-cn': "踢飛"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ブロックスタンプ",
			'zh-tw': "障礙踩踏",
			'zh-cn': "障礙踩踏"
		},

		damage: 90,

		effect: {
			ja: "次の相手の番、このワザを受けたたねポケモンは、ワザが使えない。",
			'zh-tw': "在下個對手的回合，受到這個招式的【基礎】寶可夢，無法使用招式。",
			'zh-cn': "在下個對手的回合，受到這個招式的【基礎】寶可夢，無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card