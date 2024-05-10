import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデアの学生",
		'zh-tw': "帕底亞的學生",
		th: "นักเรียนในพัลเดีย",
		id: "Pelajar Paldea"
	},

	illustrator: "Cona Nitanda",
	category: "Trainer",

	effect: {
		ja: "自分の山札からポケモン（「ルールを持つポケモン」をのぞく）を1枚選び、相手に見せて、手札に加える。そして山札を切る。手札に加えられるポケモンの枚数は、自分のトラッシュにある「パルデアの学生」（このカードをのぞく）の枚数ぶん多くなる。",
		'zh-tw': "從自己的牌庫選擇1張寶可夢卡（「擁有規則的寶可夢」除外），在給對手看過後加入手牌。並且重洗牌庫。可加入手牌的寶可夢卡的張數增加與自己的棄牌區的「帕底亞的學生」（這張卡除外）的張數相同數量。",
		th: "เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา (ยกเว้น [โปเกมอนที่มีกฎ]) ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด จำนวนการ์ดโปเกมอนที่สามารถนำขึ้นมือได้ จะเพิ่มขึ้นตามจำนวนการ์ด [นักเรียนในพัลเดีย] ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเรา (ยกเว้นการ์ดนี้)",
		id: "Pilih 1 lembar Pokémon (selain Pokémon yang memiliki Peraturan) dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck. Jumlah Pokémon yang dapat ditambahkan ke Kartu Pegangan bertambah untuk tiap lembar Pelajar Paldea (selain kartu ini) yang ada di Trash sendiri."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card
