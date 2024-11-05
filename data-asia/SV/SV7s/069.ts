import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ศิลาเหล็ก",
		id: "Iron Boulder"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		th: "เหมือนว่าร่างกายจะมีคุณสมบัติเป็นโลหะ ถูกตั้งชื่อตามวัตถุลึกลับที่ถูกระบุไว้ในหนังสือเก่าแก่",
		id: "Tampaknya Pokémon ini bertubuh metalik. Namanya diberikan berdasarkan objek misterius yang tercatat dalam buku kuno."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "แอดจัสต์ฮอร์น",
			id: "Adjust Horn"
		},

		effect: {
			th: "ถ้าจำนวนการ์ดบนมือฝ่ายเรากับจำนวนการ์ดบนมือฝ่ายตรงข้ามไม่เท่ากัน ท่าต่อสู้นี้จะล้มเหลว",
			id: "Jika jumlah Kartu Pegangan sendiri dan jumlah Kartu Pegangan lawan tidak sama, serangan ini gagal."
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