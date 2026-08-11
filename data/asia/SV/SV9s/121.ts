import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "อุ๊อุ <ของฮ็อป>",
		'id-id': "Cramorant <Hop>"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'th-th': "มีนิสัยที่จะกลืนทุกสิ่งทุกอย่างลงไปทั้งตัว ยิ่งอุ๊อุทรมานเพราะเหยื่อมี ขนาดใหญ่เกินจนติดคอมากเท่าไหร่ ยิ่งรับมือยากขึ้นเท่านั้น",
		'id-id': "Pokémon yang memiliki kebiasaan menelan utuh apa pun. Cramorant yang sedang kesulitan akibat termengkelan oleh mangsa terlalu besarlah yang makin sulit dilawan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "พ่นแปรปรวน",
			'id-id': "Muntahan Semaunya"
		},

		effect: {
			'th-th': "ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้ามไม่ใช่ 4 ใบหรือ 3 ใบ ท่าต่อสู้นี้ จะล้มเหลว",
			'id-id': "Jika sisa Kartu Point lawan bukan 4 atau 3 lembar, serangan ini gagal."
		},

		damage: 120,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card