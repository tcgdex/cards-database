import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "クリムガン",
		'zh-tw': "赤面龍",
		'zh-cn': "赤面龍"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [621],
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "凶暴で ずる賢い。 ほかの ポケモンが 掘った 巣穴を 奪って すみかにする。",
		'zh-tw': "性情凶暴且狡猾。會搶奪 其他寶可夢挖好的巢穴， 來當作是自己的窩。",
		'zh-cn': "性情凶暴且狡猾。會搶奪 其他寶可夢挖好的巢穴， 來當作是自己的窩。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "りゅうのたけり",
			'zh-tw': "龍之猛暴",
			'zh-cn': "龍之猛暴"
		},

		damage: 20,

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を1枚選び、自分のポケモンにつける。",
			'zh-tw': "從自己的棄牌區選擇1張「基本【火】能量」卡，附於自己的【龍】寶可夢身上。",
			'zh-cn': "從自己的棄牌區選擇1張「基本【火】能量」卡，附於自己的【龍】寶可夢身上。"
		}
	}, {
		cost: ["Fire", "Water", "Colorless"],

		name: {
			ja: "スラッシュクロー",
			'zh-tw': "利爪揮砍",
			'zh-cn': "利爪揮砍"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card