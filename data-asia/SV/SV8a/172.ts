import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "探検家の先導",
		id: "Bimbingan Penjelajah",
		th: "การนำทางของนักสำรวจ",
		'zh-tw': "探險家的嚮導",
		'zh-cn': "探險家的嚮導"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から6枚見て、その中からカードを2枚選び、手札に加える。残りのカードはトラッシュする。",
		id: "Lihat 6 kartu dari atas Deck sendiri, pilih 2 kartu di antaranya, lalu tambahkan ke Kartu Pegangan. Buang sisa kartu ke Trash.",
		th: "ดูการ์ด 6 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ด 2 ใบจากในนั้น นำขึ้นมือ ทิ้งการ์ดที่เหลือที่ตำแหน่งทิ้งการ์ด",
		'zh-tw': "查看自己的牌庫上方6張卡，從其中選擇2張卡加入手牌。將剩餘卡丟棄。",
		'zh-cn': "查看自己的牌庫上方6張卡，從其中選擇2張卡加入手牌。將剩餘卡丟棄。"
	},

	trainerType: "Supporter",
	regulationMark: "H",
	energyType: "Normal"
}

export default card