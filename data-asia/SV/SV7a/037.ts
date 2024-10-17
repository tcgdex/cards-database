import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋁鋼橋龍ex",
		'zh-cn': "鋁鋼橋龍ex",
		ja: "ブリジュラスex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 300,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "金屬防禦強化",
			'zh-cn': "金屬防禦強化",
			ja: 'メタルディフェンダー'
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢的弱點全部消除。",
			'zh-cn': "在下個對手的回合，這隻寶可夢的弱點全部消除。",
			ja: '次の相手の番、このポケモンの弱点は、すべてなくなる。'
		},

		damage: 220,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",

	abilities: [{
		type: "Ability",

		name: {
		'zh-tw': "‌‌[特性]合金建造",
		'zh-cn': "‌‌[特性]合金建造",
			ja: "ごうきんビルド"
		},

		effect: {
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。從自己的棄牌區選擇最多2張「基本【鋼】能量」卡，以任意方式附於自己的【鋼】寶可夢身上。",
			'zh-cn': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。從自己的棄牌區選擇最多2張「基本【鋼】能量」卡，以任意方式附於自己的【鋼】寶可夢身上。",
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモンに好きなようにつける。"
		}
	}]
}

export default card
