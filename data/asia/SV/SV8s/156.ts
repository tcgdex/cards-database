import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Terapagos",
		th: "เทราปากอส"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		id: "Jika tempurung Terastal Terapagos menerima jurus lawan, energi tersebut akan diserap dan dijadikan sebagai milik sendiri.",
		th: "คาดกันว่ามันเคยอาศัยอยู่ในพัลเดียโบราณ แต่ได้รับผลกระทบจากการ เปลี่ยนแปลงของเปลือกโลก จนมันสูญพันธุ์ไป"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Prism Charge",
			th: "ปริซึมชาร์จ"
		},

		effect: {
			id: "Pilih paling banyak 3 lembar Energi Dasar yang masing-masing berbeda tipenya dari Deck sendiri, lalu kenakan sesukanya pada Pokémon Terastal sendiri. Kemudian, kocok Deck.",
			th: "เลือกการ์ดพลังงานพื้นฐานที่แต่ละใบต่างประเภทกันได้สูงสุด 3 ใบ จากสำรับ การ์ดฝ่ายเรา ติดที่โปเกมอน [เทรัสตัล] ฝ่ายเราตามชอบ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Hard Tackle",
			th: "ฮาร์ดแท็กเกิล"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card