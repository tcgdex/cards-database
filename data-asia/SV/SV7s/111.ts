import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เมลเมทัล",
		id: "Melmetal"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		th: "เมื่อถึงอายุขัย ร่างกายก็จะเริ่มขึ้นสนิมและพังทลายลง แต่สะเก็ดชิ้นเล็ก ๆ ของมันจะฟื้นกลับคืนเป็นเมลตันในไม่ช้า",
		id: "Tubuh Melmetal berkarat dan hancur ketika masa hidupnya berakhir. Kepingan kecil yang tersisa akan bangkit kembali menjadi Meltan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ทุบแหลก",
			id: "Pukul Hancur"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "รีโมเดลแอกซ์",
			id: "Remodeled Axe"
		},

		effect: {
			th: "ก่อนจะทำแดเมจ ทิ้ง [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนนี้ที่ตำแหน่งทิ้งการ์ด ถ้าทิ้งการ์ดไม่ได้ ท่าต่อสู้นี้จะล้มเหลว",
			id: "Sebelum memberikan kerusakan, buang Pokémon Tool yang dikenakan pada Pokémon ini ke Trash. Jika tidak dapat membuangnya ke Trash, serangan ini gagal."
		},

		damage: 250,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card