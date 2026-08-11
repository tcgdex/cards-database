import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คามิชชู",
		'id-id': "Dipplin"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'th-th': "ตัวนอกที่ยื่นหัวออกมาและตัวในที่ยื่นหางออกมานั้นอาศัยอยู่ด้วยกันในแอปเปิลและคอยช่วยเหลือซึ่งกันและกัน",
		'id-id': "Boah luar yang mengeluarkan kepala dan Boah dalam yang mengeluarkan ekor saling membantu dan tinggal bersama di dalam apel."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "โค้ตติ้งแอทแทก",
			'id-id': "Coating Attack"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้จากโปเกมอน[พื้นฐาน]",
			'id-id': "Pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon Basic."
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card