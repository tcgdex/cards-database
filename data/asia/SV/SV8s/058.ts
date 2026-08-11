import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Magnezone",
		th: "จิบะคอยล์"
	},

	illustrator: "Po-Suzuki",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],

	description: {
		id: "Dengan medan magnet khusus, komponen molekul Magneton berubah, lalu berevolusi menjadi Magnezone.",
		th: "โครงสร้างโมเลกุลของแรคอยล์จะถูกเรียงใหม่เมื่อเจอสนามแม่เหล็ก พิเศษ ทำให้มันวิวัฒนาการเป็นจิบะคอยล์"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Medan Magnet Kuat",
			th: "สนามแม่เหล็กพลังแรง"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing. Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur.",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน] เทิร์นถัดไปของ ฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้"
		},

		damage: 80,
		cost: ["Lightning", "Colorless", "Colorless"]
	}, {
		name: {
			id: "Meriam Elektromagnetik",
			th: "ปืนใหญ่แม่เหล็กไฟฟ้า"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Meriam Elektromagnetik.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [ปืนใหญ่แม่เหล็กไฟฟ้า] ไม่ได้"
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