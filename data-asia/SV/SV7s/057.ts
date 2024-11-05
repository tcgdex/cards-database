import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โยมาวารุ",
		id: "Duskull"
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		th: "จะรู้สึกหนาวสั่นอย่างรุนแรงตอนที่ถูกมันจ้องเขม็งด้วยนัยน์ตาเดียวสีแดงฉานและสูบพลังงานชีวิตไป",
		id: "Ketika vitalitas terisap akibat dipelototi oleh mata tunggal merah padam Pokémon ini, rasa menggigil yang luar biasa akan menyerang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "รับวิญญาณ",
			id: "Pergi Menjemput"
		},

		effect: {
			th: "เลือกการ์ด [โยมาวารุ] ได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา วางบนเบนช์",
			id: "Pilih paling banyak 3 lembar Duskull dari Trash sendiri, lalu masukkan ke Cadangan."
		},

		cost: ["Psychic"]
	}, {
		name: {
			th: "งึมงำ",
			id: "Bergumam"
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