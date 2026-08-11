import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Kecleon",
		th: "คาคุเลียน"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		id: "Kecleon mengubah warna tubuhnya untuk mencampurkan diri dengan pemandangan. Jika tidak diperhatikan dalam waktu lama, Pokémon ini akan merajuk dan tidak memperlihatkan wujudnya.",
		th: "สามารถเปลี่ยนสีร่างกายของตัวเองให้กลมกลืนกับสภาวะแวดล้อมได้ แต่ถ้าไม่เหลียวแลนาน ๆ จะงอนแล้วหายตัวไป"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Mahir Bersembunyi",
			th: "ซ่อนเก่ง"
		},

		effect: {
			id: "Saat Pokémon ini menerima kerusakan akibat serangan, pemain melempar koin 1 kali. Jika hasilnya sisi depan, Pokémon ini tidak menerima kerusakan tersebut.",
			th: "เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ ฝ่ายเราทอยเหรียญ 1 ครั้ง ถ้าออกหัว โปเกมอนนี้จะไม่ได้รับแดเมจนั้น"
		}
	}],

	attacks: [{
		name: {
			id: "Cambuk Lidah",
			th: "แส้ลิ้น"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 30 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			th: "ทำแดเมจ 30 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำ จุดอ่อนและความต้านทานมาคิด}"
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