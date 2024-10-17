import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電電蟲",
		'zh-cn': "電電蟲",
		ja: "バチュル"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],

	description: {
		'zh-tw': "自己無法製造電力， 會附在其他大型寶可夢身上 吸取靜電。",
		'zh-cn': "自己無法製造電力， 會附在其他大型寶可夢身上 吸取靜電。",
		ja: "自分では 電気を つくれないので ほかの 大きな ポケモンに とりつき 静電気を 吸いとる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電電充能",
			'zh-cn': "電電充能",
			ja: "バチュチャージ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇「基本【草】能量」卡與「基本【雷】能量」卡最多各2張，以任意方式附於自己的寶可夢身上。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇「基本【草】能量」卡與「基本【雷】能量」卡最多各2張，以任意方式附於自己的寶可夢身上。並且重洗牌庫。",
			ja: "自分の山札から「基本エネルギー」と「基本エネルギー」をそれぞれ2枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [595]
}

export default card