import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "มาเกียนา",
		'id-id': "Magearna"
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'th-th': "ถูกสร้างขึ้นมาโดยนักวิทยาศาสตร์เมื่อราว 500 ปีก่อน ส่วนที่เรียกว่า โซลฮาร์ตเป็นร่างหลัก",
		'id-id': "Magearna dibuat oleh ilmuwan sekitar 500 tahun yang lalu. Bagian yang disebut Soul-Heart adalah tubuh aslinya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "ออโตฮีล",
			'id-id': "Auto Heal"
		},

		effect: {
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ ทุกครั้งที่ติดการ์ดพลังงานจากบนมือ ฝ่ายเราที่โปเกมอน ฟื้นฟู HP ของโปเกมอนนั้น [90]",
			'id-id': "Selama Pokémon ini ada di Arena Bertarung, tiap kali pemain mengenakan Energi dari Kartu Pegangan pada Pokémon, pulihkan HP Pokémon tersebut sejumlah 90 untuk tiap lembar Energi."
		}
	}],

	attacks: [{
		name: {
			'th-th': "สไปก์ดรอว์",
			'id-id': "Spike Draw"
		},

		effect: {
			'th-th': "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			'id-id': "Ambil 2 kartu dari atas Deck sendiri."
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card