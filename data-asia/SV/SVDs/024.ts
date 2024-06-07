import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "แลมพูลา",
		id: "Lampent"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		th: "แสร้งทำเป็นตะเกียงหลบซ่อนตัวอยู่ในเมือง หากพบเจอคนที่ใกล้จะตายก็จะติดตามหลังไปอย่างเงียบ ๆ",
		id: "Lampent menyelinap ke dalam perkotaan dengan menyamar sebagai lampu. Begitu menemukan orang yang mendekati ajal, Pokémon ini akan mengikuti orang tersebut dengan diam-diam."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ไฟ",
			id: "Api"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			th: "ลูกไฟเชื้อเชิญ",
			id: "Bola Api Mengundang"
		},

		effect: {
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้ หลังจากนั้น ทำแดเมจ 30 กับโปเกมอนที่เพิ่งออกมาใหม่",
			id: "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung. Setelah itu, berikan kerusakan sejumlah 30 kepada Pokémon Bertarung yang baru."
		},

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