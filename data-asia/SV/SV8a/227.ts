import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "アカマツ",
		id: "Akamatsu",
		'zh-tw': "赤松",
		'zh-cn': "赤松"
	},

	illustrator: "Tomowaka",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札から、それぞれちがうタイプの基本エネルギーを2枚まで選び、相手に見せて、どちらか1枚を手札に加え、残りのエネルギーを自分のポケモンにつける。そして山札を切る。",
		id: "Pilih paling banyak 2 lembar Energi Dasar yang masing-masing berbeda tipenya dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan salah satu ke Kartu Pegangan dan kenakan sisa Energi pada Pokémon sendiri. Kemudian, kocok Deck.",
		'zh-tw': "從自己的牌庫選擇最多2張各不同屬性的基本能量卡，在給對手看過後，其中1張加入手牌，剩餘的能量卡附於自己的寶可夢身上。並且重洗牌庫。",
		'zh-cn': "從自己的牌庫選擇最多2張各不同屬性的基本能量卡，在給對手看過後，其中1張加入手牌，剩餘的能量卡附於自己的寶可夢身上。並且重洗牌庫。"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card