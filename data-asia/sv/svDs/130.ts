import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "กูร์ตง",
		id: "Lechonk"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		th: "หาอาหารตลอดวัน มีประสาทการรับกลิ่นที่ยอดเยี่ยมแต่จะไม่ใช้ไปกับเรื่องที่ไม่เกี่ยวข้องกับการหาอาหาร",
		id: "Lechonk mencari makanan seharian penuh. Meskipun memiliki indra penciuman yang sangat baik, Pokémon ini tidak menggunakannya selain untuk mencari makan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "กระโดดโหม่ง",
			id: "Sundulan Meloncat"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			th: "มัดช็อต",
			id: "Mud Shot"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card