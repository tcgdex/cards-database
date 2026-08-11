import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เนโม[ซัพพอร์ต]",
		'id-id': "Nemola"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'th-th': "จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
		'id-id': "Ambil 3 kartu dari atas Deck sendiri."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card