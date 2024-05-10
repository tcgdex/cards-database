import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "キュウコンex",
		'zh-tw': "九尾ex"
	},

	illustrator: "kawayoo",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ねっぷう",
			'zh-tw': "熱風"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "うつしほむら",
			'zh-tw': "現形熾火"
		},

		damage: "80+",

		effect: {
			ja: "自分の手札と相手の手札が同じ枚数なら、140ダメージ追加。",
			'zh-tw': "若自己的手牌與對手的手牌張數相同，則增加140點傷害。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card