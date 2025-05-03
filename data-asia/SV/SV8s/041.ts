import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Spheal",
		th: "ทามาซาราชิ"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		id: "Tubuh Spheal yang sangat bulat diselimuti oleh lemak yang tebal. Pokémon ini lebih cepat menggelinding daripada berjalan.",
		th: "ร่างกายที่ถูกห่อหุ้มด้วยชั้นไขมันหนานั้นกลมปุ๊กได้อย่างน่าทึ่ง กลิ้งตัวได้ ไวกว่าเดิน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Bubuk Salju",
			th: "ผงหิมะ"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur.",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]"
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