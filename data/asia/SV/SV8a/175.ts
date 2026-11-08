import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "フトゥー博士のシナリオ",
		'id-id': "Skenario Profesor Futu",
		'th-th': "แผนการของศาสตราจารย์ฟูทูร์",
		'zh-tw': "弗圖博士的劇本",
		'zh-cn': "弗圖博士的劇本"
	},

	illustrator: "hncl",
	rarity: "None",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場のポケモンを1匹選び、手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）",
		'id-id': "Pilih 1 Pokémon di Arena sendiri, lalu kembalikan ke Kartu Pegangan. (Buang semua kartu selain Pokémon ke Trash.)",
		'th-th': "เลือกโปเกมอนบนกระดานฝ่ายเรา 1 ตัว นำกลับขึ้นมือ (ทิ้งการ์ดทุกใบที่ไม่ใช่โปเกมอนที่ตำแหน่งทิ้งการ์ด)",
		'zh-tw': "選擇1隻自己的場上寶可夢，放回手牌。（寶可夢以外的卡全部丟棄。）",
		'zh-cn': "選擇1隻自己的場上寶可夢，放回手牌。（寶可夢以外的卡全部丟棄。）"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803288,
				tcgplayer: 602626,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602627,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card