import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "博士の研究",
		'zh-tw': "博士的研究",
		'th-th': "งานวิจัยของศาสตราจารย์",
		'id-id': "Penelitian Profesor (Profesor Olim)[Supporter]"
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札をすべてトラッシュし、山札を7枚引く。",
		'zh-tw': "將自己的手牌全部丟棄，從牌庫抽出7張卡。",
		'th-th': "ทิ้งการ์ดบนมือฝ่ายเราทั้งหมดที่ตำแหน่งทิ้งการ์ด จั่วการ์ด 7 ใบจากสำรับการ์ด",
		'id-id': "Buang semua Kartu Pegangan sendiri ke Trash, lalu ambil 7 kartu dari atas Deck."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746558,
				tcgplayer: 567577,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card