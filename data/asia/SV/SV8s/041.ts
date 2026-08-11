import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Spheal",
		'th-th': "ทามาซาราชิ"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'id-id': "Tubuh Spheal yang sangat bulat diselimuti oleh lemak yang tebal. Pokémon ini lebih cepat menggelinding daripada berjalan.",
		'th-th': "ร่างกายที่ถูกห่อหุ้มด้วยชั้นไขมันหนานั้นกลมปุ๊กได้อย่างน่าทึ่ง กลิ้งตัวได้ ไวกว่าเดิน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Bubuk Salju",
			'th-th': "ผงหิมะ"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur.",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card