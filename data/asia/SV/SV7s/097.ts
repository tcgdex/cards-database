import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คาลามาเนโร",
		'id-id': "Malamar"
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'th-th': "ถ้าจ้องมองแสงจากส่วนที่เรืองแสงออกมาจะตกอยู่ในสภาพถูกสะกดจิตทันทีและถูกคาลามาเนโรควบคุมได้",
		'id-id': "Siapa yang memandang cahaya pada tubuh bercahaya Malamar akan terhipnotis dan dikendalikan oleh Pokémon ini."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "หนวดสมคบคิด",
			'id-id': "Tentakel Persekongkolan"
		},

		effect: {
			'th-th': "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้ หลังจากนั้น ทำแดเมจ 120 กับโปเกมอนที่เพิ่งออกมาใหม่ เทิร์นนี้ ถ้าไม่ได้นำการ์ด [อุบายของซีโรซิก] จากบนมือออกมาใช้ ท่าต่อสู้นี้จะล้มเหลว",
			'id-id': "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung. Setelah itu, berikan kerusakan sejumlah 120 kepada Pokémon Bertarung yang baru. Jika pada giliran ini, Konspirasi Xerosic tidak dimainkan dari Kartu Pegangan, serangan ini gagal."
		},

		cost: ["Darkness"]
	}, {
		name: {
			'th-th': "โจมตีหมุนวน",
			'id-id': "Serangan Berputar"
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