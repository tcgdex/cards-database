import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "スナッチアーム",
		'zh-tw': "抓換臂",
		th: "สแนชอาร์ม",
		id: "Snatch Arm"
	},

	illustrator: "inose yukie",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中からポケモンを1枚選び、相手の山札の下にもどす。",
		'zh-tw': "查看對手的手牌，從其中選擇1張寶可夢卡，放回對手的牌庫下方。",
		th: "ดูการ์ดบนมือฝ่ายตรงข้าม เลือกการ์ดโปเกมอน 1 ใบจากในนั้น ใส่กลับไปด้านล่างของสำรับการ์ดฝ่ายตรงข้าม",
		id: "Lihat Kartu Pegangan lawan, pilih 1 lembar Pokémon di antaranya, lalu kembalikan ke bawah Deck lawan."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card