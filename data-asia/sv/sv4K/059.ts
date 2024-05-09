import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "カビゴンドール"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",
	hp: 120,

	effect: {
		ja: "対戦準備でポケモンを場に出すとき、このカードが手札にあるなら、このカードをHP120のタイプのたねポケモンとして、ウラにして場に出してよい。（このカードは、対戦準備以外では場に出せない。）\n自分の番の中でなら、場に出ているこのカードをトラッシュできる。\n\nこのカードは、特殊状態にならず、にげられない。このカードがきぜつしても、相手はサイドをとれない。"
	},

	trainerType: "Item"
}

export default card