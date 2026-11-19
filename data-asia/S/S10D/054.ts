import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "レジギガス",
		'zh-tw': "雷吉奇卡斯"
	},

	illustrator: "Yuya Oka",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [486],
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "縄で 縛った 大陸を 引っ張って 動かしたという 伝説が 残されている。",
		'zh-tw': "在世上流傳著的傳說中， 牠拉動了被繩子所綑綁的大地。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こだいのえいち",
			'zh-tw': "古代睿智"
		},

		effect: {
			ja: "自分の場に「レジロック」「レジアイス」「レジスチル」「レジエレキ」「レジドラゴ」がいるなら、自分の番に1回使える。自分のトラッシュからエネルギーを3枚まで選び、自分のポケモン1匹につける。",
			'zh-tw': "若自己的場上有「雷吉洛克」「雷吉艾斯」「雷吉斯奇魯」「雷吉艾勒奇」「雷吉鐸拉戈」，則在自己的回合時可使用1次。從自己的棄牌區選擇最多3張能量卡，附於自己的1隻寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			ja: "ギガントブレイク",
			'zh-tw': "巨烈破壞"
		},

		effect: {
			ja: "相手のバトルポケモンが「ポケモンVMAX」なら、150ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【VMAX】」，則增加150點傷害。"
		},

		damage: "150+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651022,
				tcgplayer: 569809,
				cardtrader: 234190,
			},
		},
	]
}

export default card