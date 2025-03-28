import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "กาจิกุมะ พระจันทร์สีเลือด",
		id: "Ursaluna Bulan Merah"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		th: "กาจิกุมะพิเศษตัวนี้ป้องกันตัวด้วยโคลนที่แข็งราวกับเหล็ก และมีตาซ้ายที่สามารถมองเห็นในที่มืดได้",
		id: "Ursaluna khusus yang melindungi tubuhnya dengan lumpur sekeras besi dan memiliki mata kiri yang dapat melihat tembus kegelapan."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			th: "กฎเกณฑ์จากประสบการณ์",
			id: "Aturan Menurut Pengalaman"
		},

		effect: {
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] ได้สูงสุด 2 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนนี้",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan ke Cadangan. Pilih paling banyak 2 lembar Energi Dasar {Petarung} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon ini."
		}
	}],

	attacks: [{
		name: {
			th: "แมดไบต์",
			id: "Mad Bite"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		},

		damage: "100+",
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card