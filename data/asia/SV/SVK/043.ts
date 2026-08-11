import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ダブルターボエネルギー"
	},

	category: "Energy",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、エネルギー2個ぶんとしてはたらく。\n\nこのカードをつけているポケモンが使うワザの、相手のポケモンへのダメージは「-20」される。"
	},

	energyType: "Special",
	rarity: "None"
}

export default card