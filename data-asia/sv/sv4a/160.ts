import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ネモのリュック",
		'zh-tw': "妮莫的背包",
		th: "กระเป๋าเป้ของเนโม",
		id: "Ransel Nemola"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから「ネモ」を2枚まで選び、相手に見せて、手札に加える。",
		'zh-tw': "從自己的棄牌區選擇最多2張「妮莫」，在給對手看過後加入手牌。",
		th: "เลือกการ์ด [เนโม] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
		id: "Pilih paling banyak 2 lembar Nemola dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card