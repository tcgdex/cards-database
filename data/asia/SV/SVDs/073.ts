import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "คูชีท",
		id: "Mawile"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		th: "กัดงับฝ่ายตรงข้ามด้วยกรามใหญ่ที่เปลี่ยนรูปร่างมาจากเขาเหล็ก",
		id: "Mawile melahap dan menggigit lawannya menggunakan rahang besar yang merupakan perubahan wujud dari tanduk bajanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ขย้ำเล่นกรุบ ๆ",
			id: "Mengunyah Jahil"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวนพลังงาน[พลังจิต]ที่ติดอยู่กับโปเกมอนนี้ x30",
			id: "Serangan ini memberikan kerusakan sejumlah 30 untuk tiap Energi {Psychic} yang dikenakan pada Pokémon ini."
		},

		damage: "30×",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card