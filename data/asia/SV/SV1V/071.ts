import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ピクニックバスケット",
		'zh-tw': "野餐籃",
		'th-th': "ตะกร้าปิกนิก",
		'id-id': "Keranjang Piknik"
	},

	illustrator: "OKACHEKE",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのポケモン全員のHPを、それぞれ「30」回復する。",
		'zh-tw': "將雙方的所有寶可夢各恢復「30」HP。",
		'th-th': "ฟื้นฟู HP ของโปเกมอนของทั้งสองฝ่ายทุกตัว ตัวละ [30]",
		'id-id': "Pulihkan HP semua Pokémon kedua pemain masing-masing sejumlah 30."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693146,
				tcgplayer: 568297,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "G"
}

export default card