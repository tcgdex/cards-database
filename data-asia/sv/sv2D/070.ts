import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "災いの荒野",
		'zh-tw': "災禍荒野",
		th: "ทุ่งร้างหายนะ",
		id: "Gurun Malapetaka"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "おたがいのたねポケモン（ポケモンをのぞく）全員のにげるためのエネルギーは、それぞれ1個ぶん多くなる。",
		'zh-tw': "雙方的所有【基礎】寶可夢（【鬥】寶可夢除外）【撤退】所需的能量各增加1個。",
		th: "พลังงานสำหรับ[หนี]ของโปเกมอน[พื้นฐาน]ของทั้งสองฝ่ายทุกตัว (ยกเว้นโปเกมอน[ต่อสู้]) แต่ละตัวจะเพิ่มขึ้น 1 ลูก",
		id: "Energi yang dibutuhkan oleh semua Pokémon Basic (selain Pokémon {Petarung}) kedua pemain untuk Mundur masing-masing bertambah 1."
	},

	trainerType: "Stadium",
	regulationMark: "G"
}

export default card