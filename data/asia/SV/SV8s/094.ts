import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Gimmighoul",
		'th-th': "คอลเลคเรย์"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'id-id': "Gimmighoul tinggal di dalam kotak harta berkarat. Pernah ada yang meletakkannya di sudut toko peralatan tanpa menyadari bahwa ia adalah Pokémon.",
		'th-th': "อาศัยอยู่ในกล่องสมบัติเก่า ๆ บางครั้งก็ถูกเอาไปวางไว้ที่มุมของ ร้านขายเครื่องมือเพราะไม่มีใครรู้ว่าเป็นโปเกมอน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tugas Kecil",
			'th-th': "งานเล็กน้อย"
		},

		effect: {
			'id-id': "Pilih paling banyak 2 lembar Energi Dasar dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			'th-th': "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่าย ตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Serudukan",
			'th-th': "พุ่งเข้าชน"
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