import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "แลนเทอร์น",
		id: "Lanturn"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		th: "ปล่อยแสงสว่างเจิดจ้าออกมาทำให้อีกฝ่ายตาพร่าจนไม่สามารถเคลื่อนไหวได้ แล้วอาศัยจังหวะนั้นกลืนอีกฝ่ายเข้าไปทั้งตัว",
		id: "Ia melepaskan cahaya yang menyilaukan untuk membutakan lawan, kemudian ia menelannya bulat-bulat saat lawan tersebut tidak dapat bergerak."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "แสงวาบอลเวง",
			id: "Kilat Distraksi"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน] จำนวนตัวนับแดเมจที่วางด้วยสภาวะ[สับสน]นี้จะเป็น 8 ตัว",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing. Jumlah Token Kerusakan yang diletakkan akibat kondisi Pusing ini adalah 8."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "ธันเดอร์โบลต์",
			id: "Thunderbolt"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
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