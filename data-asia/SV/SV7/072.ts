import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋁鋼龍",
		'zh-cn': "鋁鋼龍",
		ja: "ジュラルドン"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "金屬構成的身體雖然堅固 但無法散熱，因此牠會從 尾巴上的縫隙排出熱氣。",
		'zh-cn': "金屬構成的身體雖然堅固 但無法散熱，因此牠會從 尾巴上的縫隙排出熱氣。",
		ja: "金属の ボディは 頑丈だが 熱が こもってしまうので 尻尾の スリットから 放熱している。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭突",
			'zh-cn': "頭突",
			ja: "ぶちかます"
		},

		damage: 30,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "激怒之錘",
			'zh-cn': "激怒之錘",
			ja: "レイジングハンマー"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			'zh-cn': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			ja: "このポケモンにのっているダメカンの数×10ダメージ追加。"
		},

		damage: "80＋",
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [884]
}

export default card