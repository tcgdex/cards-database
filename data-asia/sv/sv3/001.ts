import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ナゾノクサ",
		'zh-tw': "走路草"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	dexId: [43],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "昼間は 太陽を 避けるため 冷たい 地面に もぐっている。 月の光を 浴びて 育つ。",
		'zh-tw': "白天為了躲避太陽，會鑽進涼爽的地下。藉由沐浴月光來成長。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "じょうきげん",
			'zh-tw': "好心情"
		},

		effect: {
			ja: "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張卡。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "ふむ",
			'zh-tw': "踩"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card