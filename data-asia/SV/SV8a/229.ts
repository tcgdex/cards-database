import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "カキツバタ",
		id: "Levigato",
		'zh-tw': "杜若",
		'zh-cn': "杜若"
	},

	illustrator: "Tomowaka",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から7枚見て、その中からポケモンとトレーナーズを1枚ずつ選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
		id: "Lihat 7 kartu dari atas Deck sendiri, pilih Pokémon dan Trainer di antaranya masing-masing 1 lembar, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kocok kembali sisa kartu ke Deck.",
		'zh-tw': "查看自己的牌庫上方7張卡，從其中選擇寶可夢卡與訓練家卡各1張，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
		'zh-cn': "查看自己的牌庫上方7張卡，從其中選擇寶可夢卡與訓練家卡各1張，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card