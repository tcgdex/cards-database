import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "แลนเทอร์น",
		'id-id': "Lanturn"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'th-th': "ปล่อยแสงสว่างเจิดจ้าออกมาทำให้อีกฝ่ายตาพร่าจนไม่สามารถเคลื่อนไหวได้ แล้วอาศัยจังหวะนั้นกลืนอีกฝ่ายเข้าไปทั้งตัว",
		'id-id': "Ia melepaskan cahaya yang menyilaukan untuk membutakan lawan, kemudian ia menelannya bulat-bulat saat lawan tersebut tidak dapat bergerak."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "แสงวาบอลเวง",
			'id-id': "Kilat Distraksi"
		},

		effect: {
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน] จำนวนตัวนับแดเมจที่วางด้วยสภาวะ[สับสน]นี้จะเป็น 8 ตัว",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing. Jumlah Token Kerusakan yang diletakkan akibat kondisi Pusing ini adalah 8."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'th-th': "ธันเดอร์โบลต์",
			'id-id': "Thunderbolt"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 140,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card