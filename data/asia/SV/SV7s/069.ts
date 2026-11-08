import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ศิลาเหล็ก",
		'id-id': "Iron Boulder"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		'th-th': "เหมือนว่าร่างกายจะมีคุณสมบัติเป็นโลหะ ถูกตั้งชื่อตามวัตถุลึกลับที่ถูกระบุไว้ในหนังสือเก่าแก่",
		'id-id': "Tampaknya Pokémon ini bertubuh metalik. Namanya diberikan berdasarkan objek misterius yang tercatat dalam buku kuno."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "แอดจัสต์ฮอร์น",
			'id-id': "Adjust Horn"
		},

		effect: {
			'th-th': "ถ้าจำนวนการ์ดบนมือฝ่ายเรากับจำนวนการ์ดบนมือฝ่ายตรงข้ามไม่เท่ากัน ท่าต่อสู้นี้จะล้มเหลว",
			'id-id': "Jika jumlah Kartu Pegangan sendiri dan jumlah Kartu Pegangan lawan tidak sama, serangan ini gagal."
		},

		damage: 170,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card