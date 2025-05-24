import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "เมแทงก์ <ของไดโกะ>",
		id: "Metang <Steven>"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		th: "ดันบัล 2 ตัวเชื่อมต่อตัวเข้าด้วยกัน ด้วยเนื้อเยื่อสมอง 2 ก้อนที่ เชื่อมกันทำให้พลังจิตนั้นแข็งแกร่งขึ้นกว่าเดิม",
		id: "Dua Beldum telah menyatu. Karena 2 otaknya telah terhubung, kekuatan psikokinesisnya menjadi lebih kuat."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "เมทัลสแลช",
			id: "Metal Slash"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 70,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card