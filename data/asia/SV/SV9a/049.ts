import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "オーガポン いしずえのめん",
		'zh-tw': "厄鬼椪 礎石面具",
		'zh-cn': "厄鬼椪 礎石面具"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1017],
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "家を 支える 礎のように どっしりと 衝撃を 受け止める 守りに 秀でた 姿。",
		'zh-tw': "這是牠優於防禦的樣子。 會如穩穩支撐房屋的地基一般， 泰然自若地抵擋衝擊。",
		'zh-cn': "這是牠優於防禦的樣子。 會如穩穩支撐房屋的地基一般， 泰然自若地抵擋衝擊。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "いわかぐら",
			'zh-tw': "石之神樂",
			'zh-cn': "石之神樂"
		},

		effect: {
			ja: "自分の山札から「基本エネルギー」を1枚選び、自分のポケモンにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張「基本【鬥】能量」卡，附於自己的寶可夢身上。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇1張「基本【鬥】能量」卡，附於自己的寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "やまどつき",
			'zh-tw': "推山",
			'zh-cn': "推山"
		},

		damage: 100,

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			'zh-cn': "將對手的牌庫上方1張卡丟棄。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card