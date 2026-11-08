import { Card } from "models/database/card"
import Set from "../SVAM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "傷藥",
		'th-th': "ยารักษาแผล",
		'id-id': "Obat Luka"
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		'zh-tw': "將自己的1隻寶可夢恢復「30」HP。",
		'th-th': "ฟื้นฟู HP ของโปเกมอนฝ่ายเรา 1 ตัว [30]",
		'id-id': "Pulihkan HP 1 Pokémon sendiri sejumlah 30."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card