import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "スーパーボール",
		'zh-tw': "超級球",
		th: "ซูเปอร์บอล",
		id: "Bola Great"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から7枚見て、その中からポケモンを1枚選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
		'zh-tw': "查看自己的牌庫上方7張卡，從其中選擇1張寶可夢卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
		th: "ดูการ์ด 7 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดโปเกมอน 1 ใบจากในนั้น ให้ฝ่ายตรงข้ามดู นำขึ้นมือ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
		id: "Lihat 7 kartu dari atas Deck sendiri, pilih 1 lembar Pokémon di antaranya, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kocok kembali sisa kartu ke Deck."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card