import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ハイパーボール",
		'zh-tw': "高級球",
		th: "ไฮเปอร์บอล",
		id: "Bola Ultra"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。\n\n自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "這張卡必須將自己的2張手牌丟棄才可使用。從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		th: "การ์ดนี้ ถ้าไม่ทิ้งการ์ดบนมือฝ่ายเรา 2 ใบที่ตำแหน่งทิ้งการ์ดจะใช้ไม่ได้ เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
		id: "Kartu ini dapat digunakan jika pemain membuang 2 lembar Kartu Pegangan sendiri ke Trash. Pilih 1 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card