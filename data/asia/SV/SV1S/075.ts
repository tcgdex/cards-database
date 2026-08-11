import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "スター団のしたっぱ",
		'zh-tw': "天星隊手下",
		'th-th': "ลูกสมุนแก๊งสตาร์",
		'id-id': "Anak Buah Tim Bintang"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のバトルポケモンについているエネルギーを1個選び、相手の山札の上にもどす。",
		'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，放回對手的牌庫上方。",
		'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ใส่กลับไปด้านบนของสำรับการ์ดฝ่ายตรงข้าม",
		'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu kembalikan ke atas Deck lawan."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693042,
				tcgplayer: 567192,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card