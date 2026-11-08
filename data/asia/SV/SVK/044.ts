import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ルミナスエネルギー"
	},

	category: "Energy",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらく。\n\nこのカードをつけているポケモンに、このカード以外の特殊エネルギーがついているなら、エネルギー1個ぶんとしてはたらく。"
	},

	energyType: "Special",
	rarity: "None"
}

export default card