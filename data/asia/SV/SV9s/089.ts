import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "เบโรบา <ของแมรี>",
		id: "Impidimp <Marnie>"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		th: "ที่ต้องแกล้งอีกฝ่ายที่ตนสนิทด้วยเพราะถ้าไม่ดูดกลืนความรู้สึกแง่ลบ เข้าไป ตัวเองก็จะรู้สึกหงุดหงิดไปด้วยเช่นกัน",
		id: "Impidimp menjahili siapa pun yang akrab dengannya karena ia akan kesal kalau tidak menyerap emosi negatif."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ฉกฉวย",
			id: "Mencopet"
		},

		effect: {
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			id: "Ambil 1 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "ต่อยตี",
			id: "Menohok"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card