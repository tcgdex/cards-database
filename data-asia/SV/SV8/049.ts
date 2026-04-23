import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "エムリット",
		'zh-tw': "艾姆利多",
		'zh-cn': "艾姆利多"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [481],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "悲しみの 苦しさと 喜びの 尊さを 人々に 教えた。 感情の神と 呼ばれている。",
		'zh-tw': "教導了人們悲傷的痛苦 以及喜悅的珍貴。 被稱為感情之神。",
		'zh-cn': "教導了人們悲傷的痛苦 以及喜悅的珍貴。 被稱為感情之神。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "こころをみたす",
			'zh-tw': "滿載心田",
			'zh-cn': "滿載心田"
		},

		effect: {
			ja: "自分の手札から「基本エネルギー」を2枚まで選び、自分のポケモンに好きなようにつける。",
			'zh-tw': "從自己的手牌選擇最多2張「基本【超】能量」卡，以任意方式附於自己的寶可夢身上。",
			'zh-cn': "從自己的手牌選擇最多2張「基本【超】能量」卡，以任意方式附於自己的寶可夢身上。"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ゴッドバースト",
			'zh-tw': "神之爆炸",
			'zh-cn': "神之爆炸"
		},

		damage: 160,

		effect: {
			ja: "自分のベンチに「ユクシー」「アグノム」がいないなら、このワザは失敗。",
			'zh-tw': "若自己的備戰區沒有「由克希」「亞克諾姆」，則這個招式失敗。",
			'zh-cn': "若自己的備戰區沒有「由克希」「亞克諾姆」，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793483
	}
}

export default card