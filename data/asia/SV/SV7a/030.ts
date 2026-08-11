import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "土地雲",
		'zh-cn': "土地雲",
		'ja-jp': "ランドロス"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "土地雲造訪的土地上， 作物會結實纍纍， 因此被稱為農田之神。",
		'zh-cn': "土地雲造訪的土地上， 作物會結實纍纍， 因此被稱為農田之神。",
		'ja-jp': "ランドロスが 訪れる 土地は 作物が たくさん 実るため 畑の神様 と 言われている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "真氣之拳",
			'zh-cn': "真氣之拳",
			'ja-jp': "きあいのこぶし"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張能量卡，附於這隻寶可夢身上。",
			'zh-cn': "從自己的棄牌區選擇1張能量卡，附於這隻寶可夢身上。",
			'ja-jp': "自分のトラッシュからエネルギーを1枚選び、このポケモンにつける。"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "粗暴橫掃",
			'zh-cn': "粗暴橫掃",
			'ja-jp': "バスタースイング"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。",
			'zh-cn': "這個招式的傷害不計算抵抗力。",
			'ja-jp': "このワザのダメージは抵抗力を計算しない。"
		},

		damage: 130,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 787590,
				tcgplayer: 579412,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [645],
}

export default card