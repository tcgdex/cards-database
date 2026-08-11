import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เนโอแลนท์",
		id: "Lumineon"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		th: "เนโอแลนท์ที่ส่องแสงอยู่ก้นทะเลลึกนั้นดูเหมือนดาวที่ส่องประกายบนท้องฟ้ายามค่ำคืน",
		id: "Lumineon yang bersinar di dasar laut dalam terlihat seperti bintang-bintang yang menyinari langit malam."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ทดแทนคุณ",
			id: "Membalas Budi"
		},

		effect: {
			th: "หากต้องการ จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 6 ใบ",
			id: "Pemain dapat mengambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 6 lembar."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			th: "ครีบใบมีด",
			id: "Sirip Pemotong"
		},

		damage: 70,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card