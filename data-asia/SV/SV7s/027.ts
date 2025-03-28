import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "แมลงมอธเหล็ก",
		id: "Iron Moth"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		th: "ข้อมูลไม่เพียงพอและไม่เคยมีข้อมูลว่าถูกจับมาก่อน มีลักษณะเด่นตรงกับวัตถุที่อธิบายไว้ในบันทึกเก่าแก่",
		id: "Laporan penangkapannya 0. Data terkait Pokémon ini kurang. Karakteristiknya cocok dengan objek yang tertulis dalam buku kuno."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ดูด",
			id: "Absorpsi"
		},

		effect: {
			th: "ฟื้นฟู HP ของโปเกมอนนี้ ตามจำนวนแดเมจที่ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม",
			id: "Pulihkan HP Pokémon ini sejumlah kerusakan yang diberikan kepada Pokémon Bertarung lawan."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "ไวลด์รีเจกเตอร์",
			id: "Wild Rejector"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้จากโปเกมอน [โบราณ]",
			id: "Pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon Purba."
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card