import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ซูแบท",
		id: "Zubat"
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		th: "สำรวจสภาพโดยรอบได้ด้วยคลื่นเสียงความถี่สูงที่ปล่อยออกทางปาก แม้ภายในถ้ำแคบก็สามารถบินไปมาอย่างคล่องแคล่ว",
		id: "Zubat mencari tahu kondisi di sekelilingnya menggunakan gelombang ultrasonik yang dikeluarkan dari mulutnya. Pokémon ini dapat terbang berkeliling dengan cekatan di gua yang sempit sekalipun."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "นำทาง",
			id: "Menuntun"
		},

		effect: {
			th: "เลือกการ์ดซัพพอร์ต 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Pilih 1 lembar Supporter dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Darkness"]
	}, {
		name: {
			th: "เขี้ยวแห่งความมืด",
			id: "Taring Kegelapan"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card