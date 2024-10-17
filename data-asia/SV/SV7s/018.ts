import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คามิสึโอโรจิex",
		id: "Hydrapple ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			th: "ชาร์จความสุก",
			id: "Muatan Matang"
		},

		effect: {
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา หลังจากนั้น ฟื้นฟู HP ของโปเกมอนที่ติดการ์ดนั้น [30]",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Energi Dasar {Daun} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon sendiri. Setelah itu, pulihkan HP Pokémon yang telah dikenakan Energi sejumlah 30."
		}
	}],

	attacks: [{
		name: {
			th: "พายุน้ำตาลเชื่อม",
			id: "Badai Sirop Nektar"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[หญ้า]ที่ติดอยู่กับโปเกมอนฝ่ายเราทุกตัว x30",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi {Daun} yang dikenakan pada semua Pokémon sendiri."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card