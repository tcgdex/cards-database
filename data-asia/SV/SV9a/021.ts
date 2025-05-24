import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "オーガポン かまどのめん",
		'zh-tw': "厄鬼椪 火灶面具",
		'zh-cn': "厄鬼椪 火灶面具"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1017],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "かまどで 燃えさかる 炎のように 激しく 敵を 攻めたてる もっとも 攻撃的な 姿。",
		'zh-tw': "這是牠最具攻擊性的樣子。 會如熊熊燃燒的爐火一般， 氣勢猛烈地攻擊敵人。",
		'zh-cn': "這是牠最具攻擊性的樣子。 會如熊熊燃燒的爐火一般， 氣勢猛烈地攻擊敵人。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ほのおかぐら",
			'zh-tw': "火之神樂",
			'zh-cn': "火之神樂"
		},

		effect: {
			ja: "自分の山札から「基本エネルギー」を1枚選び、自分のポケモンにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張「基本【火】能量」卡，附於自己的寶可夢身上。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇1張「基本【火】能量」卡，附於自己的寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "やきこがす",
			'zh-tw': "灼燒",
			'zh-cn': "灼燒"
		},

		damage: 80,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			'zh-cn': "將對手的戰鬥寶可夢【灼傷】。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card