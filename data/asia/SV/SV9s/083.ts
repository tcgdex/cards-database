import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เลพัลดัส <ของแมรี>",
		'id-id': "Liepard <Marnie>"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'th-th': "ต่อสู้แย่งชิงอาณาเขตกับฟ็อกสไล ลอบเข้าใกล้เหยื่อจากทางด้านหลัง ได้โดยไม่มีเสียงแม้แต่นิดเดียว",
		'id-id': "Liepard bertarung dengan Thievul untuk memperebutkan wilayah teritorial. Pokémon ini menyelinap ke belakang mangsanya tanpa menimbulkan suara sedikit pun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ชาร์ปคลอว์",
			'id-id': "Sharp Claw"
		},

		effect: {
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】] การโจมตีนี้จะ เพิ่มแดเมจอีก 70",
			'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon {ex}, kerusakan yang diberikan bertambah sejumlah 70."
		},

		damage: "70+",
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card