import { Card } from "models/database/card"
import Set from "../SVHM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "妮莫",
		'th-th': "เนโม",
		'id-id': "Nemola"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫抽出3張卡。",
		'th-th': "จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
		'id-id': "Ambil 3 kartu dari atas Deck sendiri."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card