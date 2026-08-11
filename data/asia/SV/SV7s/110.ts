import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เมลตัน",
		id: "Meltan"
	},

	illustrator: "Apios",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		th: "หลอมละลายโลหะแล้วกินเข้าไป ทำให้โลหะเหลวไหลเวียนไปทั่วร่างเพื่อสร้างพลังงานภายในร่างกาย",
		id: "Meltan melelehkan logam dan memakannya. Pokémon ini menyirkulasikan logam cair untuk menciptakan energi di dalam tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ขนของโกโรโกโส",
			id: "Mengangkut Rongsokan"
		},

		effect: {
			th: "เลือกการ์ด [ไอเท็มติดโปเกมอน] 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Pilih 1 lembar Pokémon Tool dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Metal"]
	}, {
		name: {
			th: "กระแทก",
			id: "Menyeruduk"
		},

		damage: 30,
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

	retreat: 1,
	regulationMark: "H"
}

export default card