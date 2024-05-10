import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "はげましのてがみ",
		'zh-tw': "勉勵的信",
		th: "จดหมายให้กำลังใจ",
		id: "Surat Pemotivasi",
		'zh-cn': "勉勵的信"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。\n\n自分の山札から基本エネルギーを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "這張卡必須在上個對手的回合自己的寶可夢【昏厥】了才可使用。 從自己的牌庫選擇最多3張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
		th: "การ์ดนี้ ในเทิร์นก่อนของฝ่ายตรงข้าม ถ้าโปเกมอนฝ่ายเราไม่[หมดสภาพ]จะใช้ไม่ได้ เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
		id: "Kartu ini dapat digunakan jika pada giliran lawan sebelumnya, ada Pokémon sendiri yang KO. Pilih paling banyak 3 lembar Energi Dasar dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
		'zh-cn': "這張卡必須在上個對手的回合自己的寶可夢【昏厥】了才可使用。 從自己的牌庫選擇最多3張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card