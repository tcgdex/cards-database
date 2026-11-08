import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โยมาวารุ",
		'id-id': "Duskull"
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'th-th': "จะรู้สึกหนาวสั่นอย่างรุนแรงตอนที่ถูกมันจ้องเขม็งด้วยนัยน์ตาเดียวสีแดงฉานและสูบพลังงานชีวิตไป",
		'id-id': "Ketika vitalitas terisap akibat dipelototi oleh mata tunggal merah padam Pokémon ini, rasa menggigil yang luar biasa akan menyerang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "รับวิญญาณ",
			'id-id': "Pergi Menjemput"
		},

		effect: {
			'th-th': "เลือกการ์ด [โยมาวารุ] ได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา วางบนเบนช์",
			'id-id': "Pilih paling banyak 3 lembar Duskull dari Trash sendiri, lalu masukkan ke Cadangan."
		},

		cost: ["Psychic"]
	}, {
		name: {
			'th-th': "งึมงำ",
			'id-id': "Bergumam"
		},

		damage: 30,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
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