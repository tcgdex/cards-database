import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Tapu Koko",
		'th-th': "คาปู โคเคโค"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'id-id': "Tapu Koko dikenal sebagai Dewa Pelindung, tapi juga merupakan Dewa Murka yang akan menyergap manusia atau Pokémon yang menyinggung perasaannya.",
		'th-th': "ถูกเรียกว่าเป็นเทพพิทักษ์ แต่บางครั้งก็กลายเป็นเทพดุร้ายที่เข้าโจมตี มนุษย์หรือโปเกมอนที่มาทำให้ตนอารมณ์เสีย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Memanggil Guntur",
			'th-th': "เรียกฟ้าผ่า"
		},

		effect: {
			'id-id': "Pilih paling banyak 2 lembar Pokémon {Listrik} dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			'th-th': "เลือกการ์ดโปเกมอน[สายฟ้า]ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้าม ดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Side Counter",
			'th-th': "ไซด์เคาน์เตอร์"
		},

		effect: {
			'id-id': "Jika sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan, kerusakan yang diberikan bertambah sejumlah 90.",
			'th-th': "ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายเรา มากกว่าจำนวนการ์ดรางวัลที่เหลือ ของฝ่ายตรงข้าม การโจมตีนี้จะเพิ่มแดเมจอีก 90"
		},

		damage: "90+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card