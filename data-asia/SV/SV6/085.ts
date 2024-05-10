import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ハピナスex",
		'zh-tw': "幸福蛋ex"
	},

	category: "Pokemon",
	rarity: "Double rare",
	illustrator: "Iwamoto05",
	hp: 300,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ハッピースイッチ",
			'zh-tw': "幸福切換"
		},

		effect: {
			ja: "自分の番に1回使える。自分の場のポケモンについている基本エネルギーを1個選び、自分の別のポケモンにつけ替える。",
			'zh-tw': "在自己的回合時可使用1次。選擇1個自己的場上寶可夢身上附加的基本能量，改附於自己的其他寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "おんがえし",
			'zh-tw': "報恩"
		},

		damage: 180,

		effect: {
			ja: "のぞむなら、自分の手札が6枚になるように、山札を引く。",
			'zh-tw': "若希望，從牌庫抽卡直到自己的手牌滿6張為止。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card