import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ペパー",
		'zh-tw': "派帕",
		id: "Arvin"
	},

	illustrator: "aspara",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「グッズ」と「ポケモンのどうぐ」を1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇「物品」卡與「寶可夢道具」卡各1張，在給對手看過後加入手牌。並且重洗牌庫。",
		id: "Pilih Item dan Pokémon Tool masing-masing 1 lembar dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card