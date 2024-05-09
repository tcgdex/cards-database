import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "リバーサルエネルギー"
	},

	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\n自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、このカードは、進化ポケモン（「ルールを持つポケモン」をのぞく）についているかぎり、すべてのタイプのエネルギー3個ぶんとしてはたらく。"
	},

	energyType: "Special"
}

export default card