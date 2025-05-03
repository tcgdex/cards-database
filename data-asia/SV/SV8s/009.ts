import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Shiinotic",
		th: "มาเชโดะ"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		id: "Shiinotic memikat mangsa menggunakan cahaya sporanya yang berkedip-kedip dan membuat mangsanya tidur. Pokémon ini mengisap vitalitas mangsa menggunakan ujung jarinya.",
		th: "แสงของสปอร์ที่กะพริบจะเรียกเหยื่อให้เข้าใกล้ แล้วทำให้หลับ จะสูบ พลังชีวิตออกจากปลายนิ้ว"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Cahaya Ketenangan",
			th: "แสงสงบใจ"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Arena Bertarung. Ubah kondisi Pokémon Bertarung lawan menjadi Tidur.",
			th: "ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ทำให้โปเกมอน บนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]"
		}
	}],

	attacks: [{
		name: {
			id: "Spiral Rush",
			th: "สไปรัลรัช"
		},

		effect: {
			id: "Lempar koin hingga hasilnya sisi belakang. Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap lemparan dengan hasil sisi depan.",
			th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเพิ่มตามจำนวนครั้งที่ออกหัว x30"
		},

		damage: "60+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card