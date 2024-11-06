import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ハバタクカミ",
		'zh-tw': "振翼髮",
		'zh-cn': "振翼髮"
	},

	illustrator: "Ebila",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [987],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "とある 書物に 登場する ハバタクカミという 生物と 似た 特徴を 持つ ポケモン。",
		'zh-tw': "與某本書裡記載的一種 叫做振翼髮的生物有著 相似特徵的寶可夢。",
		'zh-cn': "與某本書裡記載的一種 叫做振翼髮的生物有著 相似特徵的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "まどわしうつす",
			'zh-tw': "蠱惑挪移",
			'zh-cn': "蠱惑挪移"
		},

		effect: {
			ja: "自分のベンチの「古代」のポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。",
			'zh-tw': "選擇1隻自己的備戰區的「古代」寶可夢，將所選的寶可夢身上放置的傷害指示物，全部改放於對手的戰鬥寶可夢身上。",
			'zh-cn': "選擇1隻自己的備戰區的「古代」寶可夢，將所選的寶可夢身上放置的傷害指示物，全部改放於對手的戰鬥寶可夢身上。"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ムーンフォース",
			'zh-tw': "月亮之力",
			'zh-cn': "月亮之力"
		},

		damage: 70,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-30」點。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-30」點。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card