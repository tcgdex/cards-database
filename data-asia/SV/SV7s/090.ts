import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โกคูลิน",
		id: "Gulpin"
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		th: "หัวใจและสมองมีขนาดเล็ก ร่างกายส่วนใหญ่เป็นกระเพาะอาหาร มีน้ำย่อยที่ละลายได้ทุกอย่าง",
		id: "Gulpin memiliki jantung dan otak yang kecil, serta sebagian besar bagian tubuhnya adalah kantong lambung. Kantong tersebut mengeluarkan asam lambung yang dapat melarutkan apa pun."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "น้ำลายยืด",
			id: "Liur"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			th: "ลมหายใจพิษ",
			id: "Napas Beracun"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		},

		damage: 30,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card