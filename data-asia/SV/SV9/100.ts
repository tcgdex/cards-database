import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "スパイクエネルギー",
		'zh-tw': "扣殺能量",
		'zh-cn': "扣殺能量"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを2個のせる。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 附有這張卡的寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置2個傷害指示物。",
		'zh-cn': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 附有這張卡的寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置2個傷害指示物。"
	},

	energyType: "Special",
	regulationMark: "I"
}

export default card