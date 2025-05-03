import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "タロ",
		id: "Tara",
		'zh-tw': "紫竽",
		'zh-cn': "紫竽"
	},

	illustrator: "Tomowaka",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべて山札にもどして切る。その後、山札を4枚引く。相手のサイドの残り枚数が3枚以下なら、引く枚数は8枚になる。",
		id: "Kocok kembali semua Kartu Pegangan sendiri ke Deck. Setelah itu, ambil 4 kartu dari atas Deck. Jika sisa Kartu Point lawan adalah 3 lembar atau kurang, jumlah kartu yang diambil menjadi 8 lembar.",
		'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出4張卡。若對手剩餘獎賞卡的張數為3張以下，則改爲抽出8張卡。",
		'zh-cn': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出4張卡。若對手剩餘獎賞卡的張數為3張以下，則改爲抽出8張卡。"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card