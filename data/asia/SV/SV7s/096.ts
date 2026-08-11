import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "มาอีกะ",
		id: "Inkay"
	},

	illustrator: "Mori Yuu",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		th: "หมุนไปมาพร้อมกับกะพริบร่างเรืองแสง สื่อสารกับพวกพ้องด้วยรูปแบบของแสง",
		id: "Inkay berputar sambil mengedipkan tubuh bercahayanya. Pokémon ini menggunakan pola cahaya untuk berkomunikasi dengan temannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "หนวดซุกซน",
			id: "Tentakel Jahil"
		},

		effect: {
			th: "ดูการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้าม คืนที่เดิม หากต้องการ สับสำรับการ์ดนั้น",
			id: "Lihat 1 kartu dari atas Deck lawan, lalu kembalikan ke posisi semula. Pemain dapat mengocok Deck tersebut."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "จิก",
			id: "Mematuk"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card