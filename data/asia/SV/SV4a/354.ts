import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ボタン",
		'zh-tw': "牡丹",
		'id-id': "Pania"
	},

	illustrator: "aspara",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場のたねポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、手札にもどす。",
		'zh-tw': "選擇1隻自己的場上的【基礎】寶可夢，將那隻寶可夢與附加的卡，全部放回手牌。",
		'id-id': "Pilih 1 Pokémon Basic di Arena sendiri, lalu kembalikan Pokémon tersebut dan semua kartu yang dikenakannya ke Kartu Pegangan."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747708,
				tcgplayer: 577567,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card