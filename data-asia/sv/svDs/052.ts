import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "บาจินอุนิ",
		id: "Pincurchin"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		th: "สร้างพลังงานไฟฟ้าออกมาเมื่อย่อยอาหาร ใช้ฟันที่แข็งแรง 5 ซี่ขูดสาหร่ายออกมากิน",
		id: "Pincurchin menghasilkan listrik saat mencerna makanannya. Pokémon ini menggunakan 5 giginya yang keras untuk mengikis dan memakan rumput laut."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เข็มยาชา",
			id: "Jarum Pelumpuh"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			th: "ไล่ตีเปรี๊ยะ ๆ",
			id: "Serangan Lanjutan Berlistrik"
		},

		effect: {
			th: "ท่าต่อสู้นี้ ในเทิร์นก่อนของฝ่ายเรา ถ้าโปเกมอนนี้ไม่ได้ใช้ [เข็มยาชา] จะใช้ไม่ได้",
			id: "Serangan ini dapat digunakan jika pada giliran sendiri sebelumnya, Pokémon ini menggunakan Jarum Pelumpuh."
		},

		damage: 100,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card