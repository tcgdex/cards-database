import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "メディカルエネルギー",
		'zh-tw': "醫療能量"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードを手札からポケモンにつけたとき、そのポケモンのHPを「30」回復する。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 從手牌將這張卡附於寶可夢身上時，將那隻寶可夢恢復「30」HP。"
	},

	energyType: "Special",
	regulationMark: "G"
}

export default card