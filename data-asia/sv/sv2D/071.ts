import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "セラピーエネルギー"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードをつけているポケモンはねむり・マヒ・こんらんにならず、受けているねむり・マヒ・こんらんは、すべて回復する。"
	},

	energyType: "Special"
}

export default card