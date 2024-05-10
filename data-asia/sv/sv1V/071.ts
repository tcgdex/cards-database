import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ピクニックバスケット",
		'zh-tw': "野餐籃",
		th: "ตะกร้าปิกนิก",
		id: "Keranjang Piknik"
	},

	illustrator: "OKACHEKE",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "おたがいのポケモン全員のHPを、それぞれ「30」回復する。",
		'zh-tw': "將雙方的所有寶可夢各恢復「30」HP。",
		th: "ฟื้นฟู HP ของโปเกมอนของทั้งสองฝ่ายทุกตัว ตัวละ [30]",
		id: "Pulihkan HP semua Pokémon kedua pemain masing-masing sejumlah 30."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card