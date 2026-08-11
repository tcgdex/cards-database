import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Gimmighoul",
		th: "คอลเลคเรย์"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		id: "Gimmighoul tinggal di dalam kotak harta berkarat. Pernah ada yang meletakkannya di sudut toko peralatan tanpa menyadari bahwa ia adalah Pokémon.",
		th: "อาศัยอยู่ในกล่องสมบัติเก่า ๆ บางครั้งก็ถูกเอาไปวางไว้ที่มุมของ ร้านขายเครื่องมือเพราะไม่มีใครรู้ว่าเป็นโปเกมอน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tugas Kecil",
			th: "งานเล็กน้อย"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Energi Dasar dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่าย ตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Serudukan",
			th: "พุ่งเข้าชน"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card