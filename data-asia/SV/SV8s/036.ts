import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Gouging Fire",
		th: "เพลิงทะลวง"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		id: "Laporan kesaksiannya hanya sedikit. Terdapat video singkat sosoknya yang menyemburkan pilar api dan mengamuk.",
		th: "มีรายงานการพบเห็นสิ่งมีชีวิตนี้เพียงไม่กี่ครั้ง มีคลิปวิดีโอที่แสดงให้ เห็นร่างที่อาละวาดและสร้างเสาเพลิงพุ่งขึ้นมา"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mendorong Jatuh",
			th: "พุ่งชน"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			id: "Menyerang Terbakar",
			th: "ลุกไหม้ประจัญบาน"
		},

		effect: {
			id: "Jika sisa Kartu Point lawan adalah 4 lembar atau kurang, kerusakan yang diberikan bertambah sejumlah 70.",
			th: "ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้ามน้อยกว่าหรือเท่ากับ 4 ใบ การ โจมตีนี้จะเพิ่มแดเมจอีก 70"
		},

		damage: "100+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card