import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブーメランエネルギー",
		'zh-tw': "回力鏢能量"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードをつけているポケモンが使うワザの効果で、このカードがトラッシュされたなら、ワザのダメージや効果のあとに、もとのポケモンにつけなおす。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 若因附有這張卡的寶可夢使用的招式的效果使這張卡被丟棄，則在招式的傷害與效果的影響之後，重新附於原本的寶可夢身上。"
	},

	energyType: "Special",
	regulationMark: "H"
}

export default card