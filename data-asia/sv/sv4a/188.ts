import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "セラピーエネルギー",
		'zh-tw': "治療能量"
	},

	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\nこのカードをつけているポケモンはねむり・マヒ・こんらんにならず、受けているねむり・マヒ・こんらんは、すべて回復する。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。附有這張卡的寶可夢不會【睡眠】・【麻痺】・【混亂】，受到的【睡眠】・【麻痺】・【混亂】全部恢復。"
	},

	energyType: "Special",
	regulationMark: "G"
}

export default card