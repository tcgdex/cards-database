import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "クラベル",
		'zh-tw': "克拉韋爾",
		th: "กลาเบล",
		id: "Dion"
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		ja: "自分の山札から、HPが「120」以下のたねポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇最多3張HP為「120」以下的【基礎】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		th: "เลือกการ์ดโปเกมอน[พื้นฐาน]ที่มี HP น้อยกว่าหรือเท่ากับ [120] ได้สูงสุด 3 ใบ จากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
		id: "Pilih paling banyak 3 lembar Pokémon Basic dengan HP 120 atau kurang dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card
