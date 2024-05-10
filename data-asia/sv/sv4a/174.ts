import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナンジャモ",
		'zh-tw': "奇樹"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ自分の手札をすべてウラにして切り、山札の下にもどす。その後、それぞれ自分のサイドの残り枚数ぶん、山札を引く。",
		'zh-tw': "雙方玩家各將自己的手牌全部翻回反面並重洗，放回牌庫下方。然後，各從牌庫抽出與自己剩餘獎賞卡的張數相同數量的卡。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card