import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "まけんきハチマキ",
		'zh-tw': "不服輸頭帶",
		th: "ผ้าคาดหัวสู้ตาย",
		id: "Ikat Kepala Tidak Mau Kalah"
	},

	illustrator: "inose yukie",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、このカードをつけているポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
		'zh-tw': "若自己剩餘獎賞卡的張數比對手剩餘獎賞卡的張數多，則附有這張卡的寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。",
		th: "ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายเรา มากกว่าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนที่ติดการ์ดนี้อยู่ ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+30]",
		id: "Jika sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan, kerusakan akibat serangan yang digunakan oleh Pokémon yang mengenakan kartu ini kepada Pokémon Bertarung lawan bertambah sejumlah 30."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card