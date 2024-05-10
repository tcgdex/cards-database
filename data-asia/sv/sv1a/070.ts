import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ボウルタウン",
		'zh-tw': "深缽鎮",
		th: "โบวล์ทาวน์",
		id: "Kota Mukun"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札からたねポケモン（「ルールを持つポケモン」をのぞく）を1枚選び、ベンチに出してよい。そして山札を切る。",
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可從自己的牌庫選擇1張【基礎】寶可夢卡（「擁有規則的寶可夢」除外），放置於備戰區。並且重洗牌庫。",
		th: "ผู้เล่นทั้งสองฝ่าย ในแต่ละเทิร์นของตัวเองทำได้ 1 ครั้ง จะเลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายตัวเอง (ยกเว้น [โปเกมอนที่มีกฎ]) วางบนเบนช์ก็ได้ แล้วสับสำรับการ์ด",
		id: "Kedua pemain 1 kali pada tiap gilirannya sendiri dapat memilih 1 lembar Pokémon Basic (selain Pokémon yang memiliki Peraturan) dari Deck sendiri, lalu memasukkannya ke Cadangan. Kemudian, kocok Deck."
	},

	trainerType: "Stadium",
	regulationMark: "G"
}

export default card