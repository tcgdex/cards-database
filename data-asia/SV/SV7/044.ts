import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霜奶仙",
		'zh-cn': "霜奶仙",
		ja: "マホイップ"
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "備受疼愛的霜奶仙 做出的鮮奶油美味至極， 令訓練家都會溫柔地培育牠。",
		'zh-cn': "備受疼愛的霜奶仙 做出的鮮奶油美味至極， 令訓練家都會溫柔地培育牠。",
		ja: "大事にされた マホイップが だす クリームは 絶品のため 優しく 育てる トレーナーばかりだ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "彩色甜點",
			'zh-cn': "彩色甜點",
			ja: "いろどりスイーツ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇與這隻寶可夢身上附加的基本能量卡相同屬性的寶可夢卡合計最多5張，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇與這隻寶可夢身上附加的基本能量卡相同屬性的寶可夢卡合計最多5張，在給對手看過後加入手牌。並且重洗牌庫。",
			ja: "自分の山札から、このポケモンについている基本エネルギーと同じタイプのポケモンを合計5枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "魔法射擊",
			'zh-cn': "魔法射擊",
			ja: "マジカルショット"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [869]
}

export default card