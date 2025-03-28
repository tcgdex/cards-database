import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Passimian",
		th: "นาเกสึเคซารุ"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		id: "Sepuluh Passimian yang dipilih oleh bos pergi berburu, lalu makanan yang didapat akan dibagi secara merata kepada kawan-kawan sekelompoknya.",
		th: "10 ตัวที่หัวหน้าฝูงเลือกจะออกล่าหาอาหารโดยอาหารที่หามาได้จะ แบ่งกันในฝูงอย่างเท่าเทียม"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Pelemparan Kerja Tim",
			th: "ประสานมือขว้าง"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Pokémon Basic di Arena sendiri.",
			th: "แดเมจจะเท่ากับจำนวนโปเกมอน[พื้นฐาน]บนกระดานฝ่ายเรา x20"
		},

		damage: "20×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card