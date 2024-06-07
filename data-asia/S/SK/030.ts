import { Card } from "../../../interfaces"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "強力無能量",
		ja: "ヒート炎エネルギー"
	},

	category: "Energy",

	effect: {
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。附有這張卡的【無】寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+20」點。",
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードをつけているポケモンの最大HPは「20」大きくなる。"
	},

	energyType: "Special",
	regulationMark: "D"
}

export default card