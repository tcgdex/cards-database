import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Oranguru",
		th: "ยาเรยูตัน"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		id: "Oranguru hidup dengan tenang di hutan. Bulu ungunya yang mirip dengan mantel tumbuh memanjang seiring dengan bertambahnya umur Pokémon ini.",
		th: "อาศัยอยู่เงียบ ๆ ในป่าลึก ยิ่งอายุมากขึ้นขนสีม่วงราวกับผ้าคลุมนั้นก็ จะยาวขึ้นด้วยเช่นกัน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menggenggam Kelemahan",
			th: "กุมจุดอ่อน"
		},

		effect: {
			id: "Hingga akhir giliran sendiri berikutnya, Kelemahan Pokémon yang menerima serangan ini menjadi tipe {Bening}. [Perhitungan kerusakan dari tipe yang menjadi Kelemahan adalah 2 kali lipat.]",
			th: "จนกว่าจะจบเทิร์นถัดไปของฝ่ายเรา จุดอ่อนของโปเกมอนที่ได้รับท่าต่อสู้นี้จะ เป็นประเภท[ไร้สี] {จุดอ่อน คำนวณแดเมจ x2}"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Tampar",
			th: "ฝ่ามือตบ"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card