import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "改造ハンマー",
		'id-id': "Palu Luar Biasa",
		'th-th': "ค้อนสลายพลังงาน",
		'zh-tw': "改造之錘",
		'zh-cn': "改造之錘"
	},

	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Trainer",

	effect: {
		'ja-jp': "相手の場のポケモンについている特殊エネルギーを1個選び、トラッシュする。",
		'id-id': "Pilih 1 Energi Spesial yang dikenakan pada Pokémon di Arena lawan, lalu buang ke Trash.",
		'th-th': "เลือกพลังงานพิเศษที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
		'zh-tw': "選擇1個對手的場上寶可夢身上附加的特殊能量，將其丟棄。",
		'zh-cn': "選擇1個對手的場上寶可夢身上附加的特殊能量，將其丟棄。"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803251,
				tcgplayer: 602558,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602559,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H"
}

export default card