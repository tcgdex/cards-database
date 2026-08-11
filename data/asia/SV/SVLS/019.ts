import { Card } from "models/database/card"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ナンジャモ"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、それぞれ自分の手札をすべてウラにして切り、山札の下にもどす。その後、それぞれ自分のサイドの残り枚数ぶん、山札を引く。"
	},

	trainerType: "Supporter",
	rarity: "None"
}

export default card