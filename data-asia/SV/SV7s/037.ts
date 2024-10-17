import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "อบาโกรา",
		id: "Carracosta"
	},

	illustrator: "LINNE",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		th: "เพราะกลืนกินเหยื่ออย่างหมดจดไม่เหลือแม้แต่เปลือกหรือกระดูก ทำให้กระดองของมันเติบโตหนาและแข็งขึ้น",
		id: "Karena cangkang dan tulang mangsanya pun disantap habis hingga bersih tanpa sisa, tempurung Carracosta tumbuh tebal dan keras."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			th: "เตรียมใจพร้อมจากยุคดึกดำบรรพ์",
			id: "Pemahaman Primitif"
		},

		effect: {
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ แดเมจของท่าต่อสู้ที่โปเกมอนฝ่ายเราใช้ทำกับโปเกมอนวิวัฒนาการบนตำแหน่งต่อสู้ฝ่ายตรงข้าม จะถูก [+30]",
			id: "Selama Pokémon ini ada di Arena, kerusakan akibat serangan yang digunakan oleh Pokémon sendiri kepada Pokémon Evolusi di Arena Bertarung lawan bertambah sejumlah 30."
		}
	}],

	attacks: [{
		name: {
			th: "ไฮโดรแครช",
			id: "Hydro Crash"
		},

		damage: 150,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card