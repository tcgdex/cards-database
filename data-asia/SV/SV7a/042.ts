import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帝牙盧卡",
		'zh-cn': "帝牙盧卡",
		ja: "ディアルガ"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		'zh-tw': "因為帝牙盧卡的誕生， 時間才得以開始流動。 是有著如此傳說的寶可夢。",
		'zh-cn': "因為帝牙盧卡的誕生， 時間才得以開始流動。 是有著如此傳說的寶可夢。",
		ja: "ディアルガが 生まれたことで 時間が 動き出したという 伝説を 持つ ポケモン。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "時間掌控",
			'zh-cn': "時間掌控",
			ja: "タイムコントロール"
		},

		effect: {
			'zh-tw': "從自己的牌庫任意選擇2張卡。重洗剩餘牌庫，將所選的卡以任意順序排列，放回牌庫上方。",
			'zh-cn': "從自己的牌庫任意選擇2張卡。重洗剩餘牌庫，將所選的卡以任意順序排列，放回牌庫上方。",
			ja: "自分の山札から好きなカードを2枚選ぶ。残りの山札を切り、選んだカードを好きな順番に入れ替えて、山札の上にもどす。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "光炮尾",
			'zh-cn': "光炮尾",
			ja: "バスターテール"
		},

		damage: 160,
		cost: ["Psychic", "Metal", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [483],

	thirdParty: {
		cardmarket: 787602
	}
}

export default card