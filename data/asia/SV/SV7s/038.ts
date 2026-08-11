import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เคเค็นคานิ",
		id: "Crabominable"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		th: "พลังต่อยแข็งแกร่งมาก แต่เคลื่อนไหวช้า พ่นฟองน้ำแข็งจากปากเพื่อหยุดการเคลื่อนไหวของฝ่ายตรงข้าม",
		id: "Kekuatan pukulannya kuat, tetapi pergerakannya lambat. Crabominable meniupkan gelembung es dari mulutnya untuk menghentikan pergerakan lawan."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "จัดเตรียม",
			id: "Persiapan Sebelum"
		},

		effect: {
			th: "พลังงาน[ไร้สี]สำหรับใช้ท่าต่อสู้ของโปเกมอนนี้จะลดลง ตามจำนวนการ์ด [ไห่ไต้] ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเรา",
			id: "Energi {Bening} yang dibutuhkan oleh Pokémon ini untuk menggunakan serangan berkurang untuk tiap lembar Algo yang ada di Trash sendiri."
		}
	}],

	attacks: [{
		name: {
			th: "หมัดหนัก",
			id: "Pukulan Ayunan Lebar"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [หมัดหนัก] ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Pukulan Ayunan Lebar."
		},

		damage: 250,
		cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card