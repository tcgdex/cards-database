import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โรคอน",
		'id-id': "Vulpix"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'th-th': "ทุกครั้งที่หางทั้ง 6 หางโตขึ้น เส้นขนจะเรียงสวยงาม พอกอดจะรู้สึกอบอุ่นเล็กน้อย",
		'id-id': "Seiring pertumbuhannya, keenam ekor Vulpix menjadi makin cantik dan bulunya makin lembut. Jika dipeluk, Pokémon ini terasa agak hangat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ลนไฟ",
			'id-id': "Api Penghangus"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card