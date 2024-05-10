import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パオジアンex",
		'zh-tw': "古劍豹ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "わななくれいき",
			'zh-tw': "戰慄寒氣"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札から「基本エネルギー」を2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。從自己的牌庫選擇最多2張「基本【水】能量」卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "ヘイルブレード",
			'zh-tw': "冰雹利刃"
		},

		damage: "60×",

		effect: {
			ja: "自分の場のポケモンについているエネルギーを好きなだけトラッシュし、その枚数×60ダメージ。",
			'zh-tw': "將自己的場上寶可夢身上附加的任意數量的【水】能量卡丟棄，造成其張數×60點傷害。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card