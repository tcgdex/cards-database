import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Magnezone",
		'th-th': "จิบะคอยล์"
	},

	illustrator: "Po-Suzuki",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],

	description: {
		'id-id': "Dengan medan magnet khusus, komponen molekul Magneton berubah, lalu berevolusi menjadi Magnezone.",
		'th-th': "โครงสร้างโมเลกุลของแรคอยล์จะถูกเรียงใหม่เมื่อเจอสนามแม่เหล็ก พิเศษ ทำให้มันวิวัฒนาการเป็นจิบะคอยล์"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'id-id': "Medan Magnet Kuat",
			'th-th': "สนามแม่เหล็กพลังแรง"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing. Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur.",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน] เทิร์นถัดไปของ ฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้"
		},

		damage: 80,
		cost: ["Lightning", "Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Meriam Elektromagnetik",
			'th-th': "ปืนใหญ่แม่เหล็กไฟฟ้า"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Meriam Elektromagnetik.",
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [ปืนใหญ่แม่เหล็กไฟฟ้า] ไม่ได้"
		},

		damage: 180,
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card