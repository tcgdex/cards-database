import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ボタン",
		'zh-tw': "牡丹",
		id: "Pania"
	},

	illustrator: "aspara",
	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		ja: "自分の場のたねポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、手札にもどす。",
		'zh-tw': "選擇1隻自己的場上的【基礎】寶可夢，將那隻寶可夢與附加的卡，全部放回手牌。",
		id: "Pilih 1 Pokémon Basic di Arena sendiri, lalu kembalikan Pokémon tersebut dan semua kartu yang dikenakannya ke Kartu Pegangan."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747708,
				tcgplayer: 577567,
				cardtrader: 270353,
			},
		},
	]
}

export default card