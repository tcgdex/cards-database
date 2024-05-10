import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パーモット",
		'zh-tw': "巴布土撥"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	dexId: [923],
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "ふわふわの 体毛が バッテリー。 電気自動車と 同じ 量の 電気を 蓄えることができる。",
		'zh-tw': "膨鬆的體毛是蓄電池，可以積蓄與電動汽車 等量的電力。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "でんきおこし",
			'zh-tw': "起電"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札から「基本エネルギー」を1枚選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫選擇1張「基本【雷】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "エレクトロパウ",
			'zh-tw': "電子肉球"
		},

		damage: 230,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card