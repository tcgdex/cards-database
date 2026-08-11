import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ビーチコート",
		'zh-tw': "海灘場地",
		'th-th': "บีชคอร์ท",
		'id-id': "Lapangan Pinggir Pantai"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのたねポケモン全員のにげるためのエネルギーは、それぞれ1個ぶん少なくなる。",
		'zh-tw': "雙方的所有【基礎】寶可夢【撤退】所需的能量，各減少1個。",
		'th-th': "พลังงานสำหรับ[หนี]ของโปเกมอน[พื้นฐาน]ของทั้งสองฝ่ายทุกตัว แต่ละตัวจะลดลง 1 ลูก",
		'id-id': "Energi yang dibutuhkan oleh semua Pokémon Basic kedua pemain untuk Mundur masing-masing berkurang 1."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693045,
				tcgplayer: 567195,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "G"
}

export default card