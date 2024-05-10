import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ネルケ",
		'zh-tw': "聶凱",
		th: "เน็ลเคอ",
		id: "Don"
	},

	illustrator: "GOSSAN",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中にあるサポートの枚数×2枚ぶん、自分の山札を引く。",
		'zh-tw': "查看對手的手牌，從自己的牌庫抽出與其中支援者卡的張數×2張相同數量的卡。",
		th: "ดูการ์ดบนมือฝ่ายตรงข้าม จั่วการ์ดจากสำรับการ์ดฝ่ายเรา ตามจำนวนการ์ดซัพพอร์ตที่อยู่ในนั้น x2 ใบ",
		id: "Lihat Kartu Pegangan lawan, ambil kartu dari atas Deck sendiri sejumlah 2 lembar untuk tiap lembar Supporter yang ada di antaranya."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card