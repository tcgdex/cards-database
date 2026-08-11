import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ฮาบูเนค",
		'id-id': "Seviper"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'th-th': "ลับดาบที่หางด้วยโขดหินแข็ง ๆ ขยับเข้าใกล้เหยื่อในขณะที่ซ่อนตัวในพงหญ้า แล้วใช้เขี้ยวพิษจู่โจม",
		'id-id': "Seviper mengasah pedang di ekornya dengan batu keras. Pokémon ini bersembunyi, mendekati mangsanya melalui semak-semak, lalu menyerang mereka dengan taring beracunnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เขี้ยวคม",
			'id-id': "Taring Tajam"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ฟาด",
			'id-id': "Menebas Turun"
		},

		effect: {
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอนวิวัฒนาการ การโจมตีนี้จะเพิ่มแดเมจอีก 50",
			'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon Evolusi, kerusakan yang diberikan bertambah sejumlah 50."
		},

		damage: "50+",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card