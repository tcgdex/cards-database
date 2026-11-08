import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คิรินริกิ",
		'id-id': "Girafarig"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'th-th': "สมองที่หางเล็กมากก็จริง แต่เป็นอวัยวะสำคัญที่ใช้ในการสำแดงพลังจิตอันทรงพลัง",
		'id-id': "Meskipun sangat kecil, otak pada ekor Girafarig adalah organ penting yang menghasilkan kekuatan psikokinesis yang kuat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "จิตตานุภาพ",
			'id-id': "Psikokinesis"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'th-th': "เฮดแบงก์",
			'id-id': "Hantaman Kepala"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card