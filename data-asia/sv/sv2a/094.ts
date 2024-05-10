import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゲンガー",
		'zh-tw': "耿鬼"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [94],
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "命を 奪おうと 決めた 獲物の 影に 潜り込み じっと チャンスを 狙ってる。",
		'zh-tw': "會潛進獵物的影子裡，然後靜靜地等待 奪取性命的機會到來。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ポルターガイスト",
			'zh-tw': "靈騷"
		},

		damage: "50×",

		effect: {
			ja: "相手の手札を見て、その中にあるトレーナーズの枚数×50ダメージ。",
			'zh-tw': "查看對手的手牌，造成其中訓練家卡的張數×50點傷害。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ホロウダイブ",
			'zh-tw': "陰森奇襲"
		},

		damage: 110,

		effect: {
			ja: "ダメカン3個を、相手のベンチポケモンに好きなようにのせる。",
			'zh-tw': "將3個傷害指示物以任意方式放置於對手的備戰寶可夢身上。"
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

	retreat: 0,
	regulationMark: "G"
}

export default card