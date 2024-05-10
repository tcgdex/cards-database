import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジェットエネルギー",
		'zh-tw': "噴射能量"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードを手札からベンチポケモンにつけたとき、このカードをつけたポケモンを、バトルポケモンと入れ替える。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 從手牌將這張卡附於備戰寶可夢身上時，將附有這張卡的寶可夢與戰鬥寶可夢互換。"
	},

	energyType: "Special",
	illustrator: "n/a",
	regulationMark: "G"
}

export default card