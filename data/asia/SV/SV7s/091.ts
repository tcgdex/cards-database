import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "มารุโนม",
		id: "Swalot"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		th: "แม้แต่ยางรถยนต์ก็กลืนได้ในคำเดียว หลั่งของเหลวพิษออกมาจากรูขุมขนในร่างกาย",
		id: "Roda ban sekalipun, Swalot akan menelannya bulat-bulat dalam satu teguk. Pokémon ini mengeluarkan cairan tubuh beracun mematikan dari pori-pori tubuhnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "อ้ำคำโต",
			id: "Mulut Besar Menutup"
		},

		effect: {
			th: "ถ้าจำนวนพลังงานที่ติดอยู่กับโปเกมอนนี้ มากกว่าจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม การโจมตีนี้จะเพิ่มแดเมจอีก 160",
			id: "Jika jumlah Energi yang dikenakan pada Pokémon ini lebih banyak dari jumlah Energi yang dikenakan pada Pokémon Bertarung lawan, kerusakan yang diberikan bertambah sejumlah 160."
		},

		damage: "10+",
		cost: ["Darkness"]
	}, {
		name: {
			th: "เวนอมฮิต",
			id: "Venom Hit"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		},

		damage: 100,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card