import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "コルサ",
		id: "Brassio",
		'zh-tw': "寇沙",
		'zh-cn': "寇沙"
	},

	illustrator: "GIDORA",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の手札を数えたあと、すべて山札にもどして切る。その後、もどした枚数より1枚多くなるように、山札を引く。",
		id: "Kocok kembali semua Kartu Pegangan ke Deck setelah menghitung jumlah Kartu Pegangan sendiri. Setelah itu, ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 1 lembar lebih banyak dari jumlah kartu yang dikembalikan.",
		'zh-tw': "將自己的所有手牌放回牌庫並重洗。然後，從牌庫抽出比放回張數多1張的卡。",
		'zh-cn': "將自己的所有手牌放回牌庫並重洗。然後，從牌庫抽出比放回張數多1張的卡。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card