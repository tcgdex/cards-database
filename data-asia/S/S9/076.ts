import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大蔥鴨",
		ja: "カモネギ"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'zh-tw': "會將翅膀所拿的莖狀植物當成劍一般去劈砍對手。 在非常時期會拿它當作食物。",
		ja: "羽で もつ 茎を 刀のように 操り 敵を 切り捨てる。 いざと いうときは エサに する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "用蔥敲打",
			ja: "ネギでしばく"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。",
			ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。"
		},

		damage: "20＋",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [83]
}

export default card