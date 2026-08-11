import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "โฮชิกะริสึ",
		id: "Skwovet"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		th: "กักตุนผลไม้ไว้ที่แก้ม พอไม่มีผลไม้จะเหงาปากจนต้องอมก้อนกรวดแทน",
		id: "Pokémon ini menyimpan buah beri di dalam pipinya. Saat tidak ada buah beri dan mulutnya kosong, Skwovet bertahan dengan mengisi mulutnya dengan kerikil."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ลักกิน",
			id: "Mencuri Makan"
		},

		effect: {
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			id: "Buang 1 kartu dari atas Deck lawan ke Trash."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "ตบแรง",
			id: "Menepuk"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card