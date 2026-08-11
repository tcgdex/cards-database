import { Card } from "../../../interfaces"
import Set from "../SVAL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吉尼亞",
		th: "ซินเนีย",
		id: "Jim"
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫選擇最多2張進化寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		th: "เลือกการ์ดโปเกมอนวิวัฒนาการได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
		id: "Pilih paling banyak 2 lembar Pokémon Evolusi dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card