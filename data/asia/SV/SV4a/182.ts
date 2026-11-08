import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ボタン",
		'zh-tw': "牡丹",
		'th-th': "โบตั๋น",
		'id-id': "Pania"
	},

	illustrator: "yuu",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場のたねポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、手札にもどす。",
		'zh-tw': "選擇1隻自己的場上的【基礎】寶可夢，將那隻寶可夢與附加的卡，全部放回手牌。",
		'th-th': "เลือกโปเกมอน[พื้นฐาน]บนกระดานฝ่ายเรา 1 ตัว นำโปเกมอนนั้น และการ์ดทั้งหมดที่ติดอยู่ กลับขึ้นมือ",
		'id-id': "Pilih 1 Pokémon Basic di Arena sendiri, lalu kembalikan Pokémon tersebut dan semua kartu yang dikenakannya ke Kartu Pegangan."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746564,
				tcgplayer: 567583,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577409,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card