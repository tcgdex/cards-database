import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คาลามาเนโร",
		id: "Malamar"
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		th: "ถ้าจ้องมองแสงจากส่วนที่เรืองแสงออกมาจะตกอยู่ในสภาพถูกสะกดจิตทันทีและถูกคาลามาเนโรควบคุมได้",
		id: "Siapa yang memandang cahaya pada tubuh bercahaya Malamar akan terhipnotis dan dikendalikan oleh Pokémon ini."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "หนวดสมคบคิด",
			id: "Tentakel Persekongkolan"
		},

		effect: {
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้ หลังจากนั้น ทำแดเมจ 120 กับโปเกมอนที่เพิ่งออกมาใหม่ เทิร์นนี้ ถ้าไม่ได้นำการ์ด [อุบายของซีโรซิก] จากบนมือออกมาใช้ ท่าต่อสู้นี้จะล้มเหลว",
			id: "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung. Setelah itu, berikan kerusakan sejumlah 120 kepada Pokémon Bertarung yang baru. Jika pada giliran ini, Konspirasi Xerosic tidak dimainkan dari Kartu Pegangan, serangan ini gagal."
		},

		cost: ["Darkness"]
	}, {
		name: {
			th: "โจมตีหมุนวน",
			id: "Serangan Berputar"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card