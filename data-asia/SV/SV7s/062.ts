import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เครเซเลีย",
		id: "Cresselia"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		th: "เวลาบินจะปล่อยอนุภาคที่ส่องแสงจากปีกที่เหมือนผ้าคลุม ถูกเรียกว่าเป็นร่างแปลงของพระจันทร์เสี้ยว",
		id: "Saat terbang, Cresselia mengeluarkan partikel cahaya dari bulunya yang bagaikan cadar. Pokémon ini dikenal sebagai Jelmaan Bulan Sabit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ร่ายรำบำบัด",
			id: "Tarian Pemulih"
		},

		effect: {
			th: "ฟื้นฟู HP ของโปเกมอนฝ่ายเราทุกตัว ตัวละ [20]",
			id: "Pulihkan HP semua Pokémon sendiri masing-masing sejumlah 20."
		},

		cost: ["Psychic"]
	}, {
		name: {
			th: "เครสเซนต์เพิร์จ",
			id: "Crescent Purge"
		},

		effect: {
			th: "หากต้องการ เลือกการ์ดรางวัลที่คว่ำอยู่ของฝ่ายเรา 1 ใบ หงายหน้าการ์ด เมื่อทำเช่นนั้นแล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 80 (หงายการ์ดรางวัลนั้นไว้ จนกว่าจะจบการแบตเทิล)",
			id: "Pemain dapat memilih 1 lembar Kartu Point sendiri yang sisi depannya menghadap ke bawah, lalu membalikkan sisi depannya menjadi menghadap ke atas. Jika dilakukan, kerusakan yang diberikan bertambah sejumlah 80. (Sisi depan Kartu Point tersebut tetap menghadap ke atas hingga permainan selesai.)"
		},

		damage: "80+",
		cost: ["Psychic", "Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card