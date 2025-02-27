import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Helioptile",
		th: "เอลิคิเทล"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		id: "Helioptile membuat listrik tenaga surya dengan melebarkan jumbai di kepalanya dan menggunakannya untuk mengeluarkan jurus listrik yang kuat.",
		th: "เมื่อกางแผ่นที่หัวแล้วผลิตไฟฟ้าจากแสงอาทิตย์จะสามารถปล่อยท่า ไฟฟ้าที่รุนแรงได้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Voltase Mini",
			th: "โวลต์ต่ำ"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Menyerang",
			th: "ประจัญบาน"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 10.",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย"
		},

		damage: 40,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card