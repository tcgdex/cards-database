import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Tapu Lele",
		'th-th': "คาปู เทเทฟู"
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'id-id': "Ia terbang berkeliling secara melambai dan menyebarkan debu sisik yang berkilau ajaib. Kabarnya, siapa pun yang menyentuh debu sisik tersebut akan segera semangat kembali.",
		'th-th': "บินพลิ้วไหวไปมาโปรยผงละอองที่ส่องประกายน่าพิศวง ว่ากันว่าผู้ที่ สัมผัสมันจะกลับมามีชีวิตชีวาในทันที"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mengecoh",
			'th-th': "ทำให้สับสน"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing.",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Mental Crush",
			'th-th': "เมนทัลแครช"
		},

		effect: {
			'id-id': "Jika Pokémon Bertarung lawan mengalami kondisi Pusing, kerusakan yang diberikan bertambah sejumlah 90.",
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน] การโจมตีนี้จะเพิ่ม แดเมจอีก 90"
		},

		damage: "90+",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card