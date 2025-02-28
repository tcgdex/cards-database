import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "シュウメイ",
		id: "Rio",
		'zh-tw': "秋明",
		'zh-cn': "秋明"
	},

	illustrator: "GIDORA",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "このカードは、相手のバトルポケモンがどくのときにしか使えない。\n\n自分の手札をすべて山札にもどして切る。その後、山札を7枚引く。",
		id: "Kartu ini hanya dapat digunakan saat Pokémon Bertarung lawan mengalami Racun. Kocok kembali semua Kartu Pegangan sendiri ke Deck. Setelah itu, ambil 7 kartu dari atas Deck.",
		'zh-tw': "這張卡只有在對手的戰鬥寶可夢【中毒】時才可使用。 將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出7張卡。",
		'zh-cn': "這張卡只有在對手的戰鬥寶可夢【中毒】時才可使用。 將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出7張卡。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card