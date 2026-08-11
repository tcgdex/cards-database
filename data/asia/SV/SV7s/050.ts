import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โทเกะเดมารุ",
		id: "Togedemaru"
	},

	illustrator: "Rianti Hidayat",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		th: "ด้วยขนยาวกลางหลัง เมื่อได้รับไฟฟ้าช็อตจากโปเกมอนไฟฟ้าหรือสายฟ้าจะสะสมไฟไว้ที่ถุงไฟฟ้า",
		id: "Togedemaru menerima sambaran petir atau serangan listrik dari Pokémon listrik dengan bulu panjang di punggungnya dan menggunakannya untuk mengecas listrik di kantong listriknya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ได้จังหวะแปล๊บปล๊าบ",
			id: "Kesempatan Berkejut-kejut"
		},

		effect: {
			th: "ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายเราเป็น 1 ใบ จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			id: "Jika sisa Kartu Point sendiri adalah 1 lembar, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card