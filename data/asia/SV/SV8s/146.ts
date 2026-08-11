import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Kecleon",
		'th-th': "คาคุเลียน"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'id-id': "Kecleon mengubah warna tubuhnya untuk mencampurkan diri dengan pemandangan. Jika tidak diperhatikan dalam waktu lama, Pokémon ini akan merajuk dan tidak memperlihatkan wujudnya.",
		'th-th': "สามารถเปลี่ยนสีร่างกายของตัวเองให้กลมกลืนกับสภาวะแวดล้อมได้ แต่ถ้าไม่เหลียวแลนาน ๆ จะงอนแล้วหายตัวไป"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Mahir Bersembunyi",
			'th-th': "ซ่อนเก่ง"
		},

		effect: {
			'id-id': "Saat Pokémon ini menerima kerusakan akibat serangan, pemain melempar koin 1 kali. Jika hasilnya sisi depan, Pokémon ini tidak menerima kerusakan tersebut.",
			'th-th': "เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ ฝ่ายเราทอยเหรียญ 1 ครั้ง ถ้าออกหัว โปเกมอนนี้จะไม่ได้รับแดเมจนั้น"
		}
	}],

	attacks: [{
		name: {
			'id-id': "Cambuk Lidah",
			'th-th': "แส้ลิ้น"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 30 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			'th-th': "ทำแดเมจ 30 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำ จุดอ่อนและความต้านทานมาคิด}"
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card