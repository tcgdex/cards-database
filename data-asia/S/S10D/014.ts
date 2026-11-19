import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "マンタイン",
		'zh-tw': "巨翅飛魚"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [226],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "大海 優雅に泳ぎ 穏やかな 性質。 遊泳速度 増せば 海面より 飛び出し 鳥ポケモンと 見間違うこと 多し。",
		'zh-tw': "性情溫和，悠游於大海之中。 游泳速度增快時會躍出海面， 人們常將其誤認為鳥寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "きしにはこぶ",
			'zh-tw': "搬上岸"
		},

		effect: {
			ja: "自分または相手のトラッシュからたねポケモンを1枚選び、持ち主のベンチに出す。",
			'zh-tw': "從自己或者對手的棄牌區選擇1張【基礎】寶可夢卡，放置於持有人的備戰區。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "アクアエッジ",
			'zh-tw': "水之刀鋒"
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650974,
				tcgplayer: 569769,
				cardtrader: 234080,
			},
		},
	]
}

export default card