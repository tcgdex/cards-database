import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ルミナスエネルギー",
		'zh-tw': "夜光能量"
	},

	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらく。\n\nこのカードをつけているポケモンに、このカード以外の特殊エネルギーがついているなら、エネルギー1個ぶんとしてはたらく。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個所有屬性的能量。 若附有這張卡的寶可夢身上附有這張卡以外的特殊能量卡，則視為提供1個【無】能量。"
	},

	energyType: "Special",
	regulationMark: "G"
}

export default card