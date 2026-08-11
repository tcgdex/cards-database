import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ロストスイーパー"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の手札を1枚、ロストゾーンに置かなければ使えない。\n\nおたがいの場のポケモンについている「ポケモンのどうぐ」と場に出ている「スタジアム」の中から1枚選び、ロストゾーンに置く。"
	},

	trainerType: "Item",
	rarity: "None"
}

export default card