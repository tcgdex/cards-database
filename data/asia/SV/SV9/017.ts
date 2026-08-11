import { Card } from "models/database/card"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ボルケニオンex",
		'zh-tw': "波爾凱尼恩ex",
		'zh-cn': "波爾凱尼恩ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "やけつくじょうき",
			'zh-tw': "燒灼蒸汽",
			'zh-cn': "燒灼蒸汽"
		},

		effect: {
			'ja-jp': "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のバトルポケモンをやけどにする。",
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。將對手的戰鬥寶可夢【灼傷】。",
			'zh-cn': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。將對手的戰鬥寶可夢【灼傷】。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'ja-jp': "ヒートサイクロン",
			'zh-tw': "高溫旋風",
			'zh-cn': "高溫旋風"
		},

		damage: 160,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
			'zh-cn': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 807604,
				tcgplayer: 614868,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
}

export default card