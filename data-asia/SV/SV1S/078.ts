import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ビーチコート",
		'zh-tw': "海灘場地",
		th: "บีชคอร์ท",
		id: "Lapangan Pinggir Pantai"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "おたがいのたねポケモン全員のにげるためのエネルギーは、それぞれ1個ぶん少なくなる。",
		'zh-tw': "雙方的所有【基礎】寶可夢【撤退】所需的能量，各減少1個。",
		th: "พลังงานสำหรับ[หนี]ของโปเกมอน[พื้นฐาน]ของทั้งสองฝ่ายทุกตัว แต่ละตัวจะลดลง 1 ลูก",
		id: "Energi yang dibutuhkan oleh semua Pokémon Basic kedua pemain untuk Mundur masing-masing berkurang 1."
	},

	trainerType: "Stadium",
	regulationMark: "G"
}

export default card