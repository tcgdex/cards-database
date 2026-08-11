import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ยารักษาแผล[ไอเท็ม]",
		'id-id': "Obat Luka"
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		'th-th': "ฟื้นฟู HP ของโปเกมอนฝ่ายเรา 1 ตัว [30]",
		'id-id': "Pulihkan HP 1 Pokémon sendiri sejumlah 30."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card