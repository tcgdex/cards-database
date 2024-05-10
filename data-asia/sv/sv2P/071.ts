import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "リバーサルエネルギー",
		'zh-tw': "反轉能量"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\n自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、このカードは、進化ポケモン（「ルールを持つポケモン」をのぞく）についているかぎり、すべてのタイプのエネルギー3個ぶんとしてはたらく。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 附於進化寶可夢（「擁有規則的寶可夢」除外）身上時，若自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則視為提供3個所有屬性的能量。"
	},

	energyType: "Special",
	illustrator: "n/a",
	regulationMark: "G"
}

export default card