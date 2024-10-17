import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คาจิริกาเมะ",
		id: "Drednaw"
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		th: "หลบซ่อนตัวอยู่แถวชายฝั่ง คอยยืดคอยาวออกไปกัดขย้ำเหยื่อตอนที่เหยื่อออกมาดื่มน้ำ",
		id: "Drednaw bersembunyi di pantai, lalu memanjangkan lehernya dan menggigit mangsanya yang datang untuk minum."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "กระดองปราการเหล็ก",
			id: "Cangkang Pertahanan Besi"
		},

		effect: {
			th: "โปเกมอนนี้ จะไม่ได้รับแดเมจของท่าต่อสู้ที่มากกว่าหรือเท่ากับ [200] จากโปเกมอนฝ่ายตรงข้าม",
			id: "Pokémon ini tidak menerima kerusakan akibat serangan sejumlah 200 atau lebih dari Pokémon lawan."
		}
	}],

	attacks: [{
		name: {
			th: "ฮาร์ดครันช์",
			id: "Hard Crunch"
		},

		effect: {
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 80",
			id: "Jika Pokémon Bertarung lawan memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 80."
		},

		damage: "80+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card