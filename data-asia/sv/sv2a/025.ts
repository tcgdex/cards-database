import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピカチュウ",
		'zh-tw': "皮卡丘"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [25],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "両頬には 電気を 溜めこむ 袋がある。 怒ると 溜めこんだ 電気を 一気に 放ってくる。",
		'zh-tw': "雙頰上有儲存電力的囊袋。一旦生氣就會把儲存的電力 一口氣釋放出來。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "じゅうでん",
			'zh-tw': "充電"
		},

		effect: {
			ja: "自分の山札から「基本エネルギー」を1枚選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張「基本【雷】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "ピカパンチ",
			'zh-tw': "皮卡拳"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card