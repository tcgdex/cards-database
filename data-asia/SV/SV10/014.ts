import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風速狗",
		'zh-cn': "風速狗",
		ja: "ウインディ"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'zh-tw': "根據過去的畫軸記載， 牠在草原上奔馳的姿態 擄獲了眾多人心。",
		'zh-cn': "根據過去的畫軸記載， 牠在草原上奔馳的姿態 擄獲了眾多人心。",
		ja: "草原を 駆け抜ける 様子は 人々の 心を 虜にしたと 昔の 絵巻に 記されていた。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "火焰",
			'zh-cn': "火焰",
			ja: "ほのお"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "懲治獠牙",
			'zh-cn': "懲治獠牙",
			ja: "こらしめファング"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為【惡】寶可夢，則增加100點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢為【惡】寶可夢，則增加100點傷害。",
			ja: "相手のバトルポケモンがポケモンなら、100ダメージ追加。"
		},

		damage: "100＋",
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [59]
}

export default card