import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Slaking ex",
		th: "เค็คคิงex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 340,
	types: ["Colorless"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Hobi Bolos",
			th: "ขี้เกียจหลังยาว"
		},

		effect: {
			id: "Jika tidak ada Pokémon {ex}/{V} di Arena lawan, Pokémon ini tidak dapat menggunakan serangan.",
			th: "ถ้าบนกระดานฝ่ายตรงข้ามไม่มี [โปเกมอน【ex】 /【V】] โปเกมอนนี้จะใช้ท่าต่อสู้ ไม่ได้"
		}
	}],

	attacks: [{
		name: {
			id: "Great Swing",
			th: "เกรทสวิง"
		},

		effect: {
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash.",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 280,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card