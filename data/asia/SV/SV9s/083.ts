import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "เลพัลดัส <ของแมรี>",
		id: "Liepard <Marnie>"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		th: "ต่อสู้แย่งชิงอาณาเขตกับฟ็อกสไล ลอบเข้าใกล้เหยื่อจากทางด้านหลัง ได้โดยไม่มีเสียงแม้แต่นิดเดียว",
		id: "Liepard bertarung dengan Thievul untuk memperebutkan wilayah teritorial. Pokémon ini menyelinap ke belakang mangsanya tanpa menimbulkan suara sedikit pun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ชาร์ปคลอว์",
			id: "Sharp Claw"
		},

		effect: {
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】] การโจมตีนี้จะ เพิ่มแดเมจอีก 70",
			id: "Jika Pokémon Bertarung lawan adalah Pokémon {ex}, kerusakan yang diberikan bertambah sejumlah 70."
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