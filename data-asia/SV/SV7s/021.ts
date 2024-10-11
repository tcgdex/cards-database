import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ยาโทโมริ",
		id: "Salandit"
	},

	illustrator: "Felicia Chen",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		th: "เฉพาะตัวเมียเท่านั้นที่สามารถสร้างแก๊สที่มีฟีโรโมนได้ ตัวผู้ที่หลงเสน่ห์จะตกเป็นเบี้ยล่างของตัวเมีย",
		id: "Hanya Salandit betina yang dapat menciptakan gas yang mengeluarkan feromon. Salandit jantan yang telah terpesona akan patuh kepada yang betina."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ลูกไฟ",
			id: "Bara Api"
		},

		effect: {
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card