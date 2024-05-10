import { Card } from "../../../interfaces"
import Set from "../svAL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "博士的研究(弗圖博士)",
		th: "งานวิจัยของศาสตราจารย์ (ศาสตราจารย์ฟูทูร์)",
		id: "Penelitian Profesor (Profesor Futu)"
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		'zh-tw': "將自己的手牌全部丟棄，從牌庫抽出7張卡。",
		th: "ทิ้งการ์ดบนมือฝ่ายเราทั้งหมดที่ตำแหน่งทิ้งการ์ด จั่วการ์ด 7 ใบจากสำรับการ์ด",
		id: "Buang semua Kartu Pegangan sendiri ke Trash, lalu ambil 7 kartu dari atas Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card