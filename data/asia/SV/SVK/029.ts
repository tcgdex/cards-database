import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ワザマシン デヴォリューション"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンは、このカードに書かれているワザを使える。［ワザを使うためのエネルギーは必要。］\nポケモンについているこのカードは、自分の番の終わりにトラッシュする。"
	},

	trainerType: "Tool",
	rarity: "None"
}

export default card