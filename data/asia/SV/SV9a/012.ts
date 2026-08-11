import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "オーガポン みどりのめん",
		'zh-tw': "厄鬼椪 碧草面具",
		'zh-cn': "厄鬼椪 碧草面具"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1017],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "身に着ける 仮面によって タイプが 変わる。 俊敏な 身のこなしと 蹴り技で 敵を 翻弄する。",
		'zh-tw': "屬性會根據戴上的面具而改變。 會用矯捷的身手和踢技 將敵人玩弄於股掌之上。",
		'zh-cn': "屬性會根據戴上的面具而改變。 會用矯捷的身手和踢技 將敵人玩弄於股掌之上。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "くさかぐら",
			'zh-tw': "草之神樂",
			'zh-cn': "草之神樂"
		},

		effect: {
			ja: "自分の山札から「基本エネルギー」を1枚選び、自分のポケモンにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張「基本【草】能量」卡，附於自己的寶可夢身上。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇1張「基本【草】能量」卡，附於自己的寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "おにハンマー",
			'zh-tw': "鬼之錘",
			'zh-cn': "鬼之錘"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンは「おにハンマー」が使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「鬼之錘」。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用「鬼之錘」。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card