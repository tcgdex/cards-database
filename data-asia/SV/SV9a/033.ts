import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "オーガポン いどのめん",
		'zh-tw': "厄鬼椪 水井面具",
		'zh-cn': "厄鬼椪 水井面具"
	},

	illustrator: "rika",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1017],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "こんこんと 湧き出る 水のように 絶え間なく 技を 繰りだし続ける 攻守に 優れた 姿。",
		'zh-tw': "這是牠攻守兼備的樣子。 會如源源不絕的湧水一般， 絲毫不間斷地使出招式。",
		'zh-cn': "這是牠攻守兼備的樣子。 會如源源不絕的湧水一般， 絲毫不間斷地使出招式。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "みずかぐら",
			'zh-tw': "水之神樂",
			'zh-cn': "水之神樂"
		},

		effect: {
			ja: "自分の山札から「基本エネルギー」を1枚選び、自分のポケモンにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張「基本【水】能量」卡，附於自己的寶可夢身上。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇1張「基本【水】能量」卡，附於自己的寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "バブルドレイン",
			'zh-tw': "泡沫吸取",
			'zh-cn': "泡沫吸取"
		},

		damage: 100,

		effect: {
			ja: "このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			'zh-cn': "將這隻寶可夢恢復「30」HP。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card