import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "エリカの招待",
		'zh-tw': "莉佳的招待[支援者]",
		th: "คำเชิญของเอริกะ[ซัพพอร์ต]",
		id: "Undangan Erika[Supporter]"
	},

	illustrator: "saino misaki",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中からたねポケモンを1枚選び、相手のベンチに出す。その後、そのポケモンをバトルポケモンと入れ替える。",
		'zh-tw': "查看對手的手牌，從其中選擇1張【基礎】寶可夢卡，放置於對手的備戰區。然後，將那隻寶可夢與戰鬥寶可夢互換。",
		th: "ดูการ์ดบนมือฝ่ายตรงข้าม เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากในนั้น วางบนเบนช์ฝ่ายตรงข้าม หลังจากนั้น สลับโปเกมอนนั้นกับโปเกมอนบนตำแหน่งต่อสู้",
		id: "Lihat Kartu Pegangan lawan, pilih 1 lembar Pokémon Basic di antaranya, lalu masukkan ke Cadangan lawan. Setelah itu, tukar Pokémon tersebut dengan Pokémon Bertarung."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card