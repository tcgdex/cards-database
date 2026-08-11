import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ジェットエネルギー"
	},

	category: "Energy",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\nこのカードを手札からベンチポケモンにつけたとき、このカードをつけたポケモンを、バトルポケモンと入れ替える。"
	},

	energyType: "Special",
	rarity: "None"
}

export default card