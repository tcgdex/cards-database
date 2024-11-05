import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "กิกิเกียร์",
		id: "Klinklang"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		th: "โจมตีด้วยกระแสไฟฟ้าแรงสูงจากปลายหนาม สะสมพลังงานจำนวนมากไว้ที่แกนกลางสีแดง",
		id: "Klinklang menembakkan listrik yang kuat dari ujung durinya. Inti tubuh merahnya menyimpan banyak energi."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			th: "หมุนวนฉุกเฉิน",
			id: "Rotasi Darurat"
		},

		effect: {
			th: "ในเทิร์นฝ่ายเรา ถ้าการ์ดนี้อยู่บนมือ และบนกระดานฝ่ายตรงข้ามมีโปเกมอน[ร่าง2] อยู่ ใช้ได้ 1 ครั้ง วางการ์ดนี้บนเบนช์",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika kartu ini ada di Kartu Pegangan sendiri dan ada Pokémon Stage 2 di Arena lawan. Masukkan kartu ini ke Cadangan."
		}
	}],

	attacks: [{
		name: {
			th: "ไฮเปอร์บีม",
			id: "Hyper Beam"
		},

		effect: {
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ ทั้งหมดที่ตำแหน่งทิ้งการ์ด",
			id: "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash."
		},

		damage: 130,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card