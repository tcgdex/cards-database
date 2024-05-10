import { Card } from "../../../interfaces"
import Set from "../svHM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "高科技雷達",
		th: "เทคโนเรดาร์",
		id: "Techno Radar"
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡必須將自己的1張手牌丟棄才可使用。 從自己的牌庫選擇最多2張「未來」寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		th: "การ์ดนี้ ถ้าไม่ทิ้งการ์ดบนมือฝ่ายเรา 1 ใบที่ตำแหน่งทิ้งการ์ดจะใช้ไม่ได้ เลือกการ์ดโปเกมอน [อนาคต] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
		id: "Kartu ini dapat digunakan jika pemain membuang 1 lembar Kartu Pegangan sendiri ke Trash. Pilih paling banyak 2 lembar Pokémon Futur dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card