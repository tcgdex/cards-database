import { Card } from "../../../interfaces"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "高溫火能量",
		ja: "パワフル無色エネルギー"
	},

	category: "Energy",

	effect: {
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【火】能量。附有這張卡的【火】寶可夢的最大HP增加「20」。",
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードをつけているポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。"
	},

	energyType: "Special",
	regulationMark: "D"
}

export default card