import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "托戈德瑪爾",
		'zh-cn': "托戈德瑪爾",
		ja: "トゲデマル"
	},

	illustrator: "Rianti Hidayat",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'zh-tw': "用背上的長毛來接收 閃電和電氣寶可夢釋放的電擊， 然後將之儲存在電囊中。",
		'zh-cn': "用背上的長毛來接收 閃電和電氣寶可夢釋放的電擊， 然後將之儲存在電囊中。",
		ja: "背中の 長い 毛で 雷や でんきポケモンの 電撃を 受けて 電気袋に 充電する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "麻麻時機",
			'zh-cn': "麻麻時機",
			ja: "ビリビリチャンス"
		},

		effect: {
			'zh-tw': "若自己剩餘獎賞卡的張數為1張，則將對手的戰鬥寶可夢【麻痺】。",
			'zh-cn': "若自己剩餘獎賞卡的張數為1張，則將對手的戰鬥寶可夢【麻痺】。",
			ja: "自分のサイドの残り枚数が1枚なら、相手のバトルポケモンをマヒにする。"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [777]
}

export default card