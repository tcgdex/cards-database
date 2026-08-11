import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ยาจิลอน <ของไดโกะ>",
		'id-id': "Baltoy <Steven>"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'th-th': "ถูกค้นพบในซากโบราณสถาน เคลื่อนตัวไปพร้อม ๆ กับหมุนตัว แม้ เวลานอนตอนกลางคืนก็ยืนด้วยขาข้างเดียว",
		'id-id': "Ditemukan di reruntuhan peninggalan kuno. Baltoy bergerak sambil berputar. Pada malam hari saat tidur pun, Pokémon ini berdiri dengan satu kaki."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "สัญญาณเรียกรวมตัว",
			'id-id': "Sinyal Pemanggilan"
		},

		effect: {
			'th-th': "เลือกการ์ด [โปเกมอนของไดโกะ] ที่เป็นโปเกมอน[พื้นฐาน]ได้สูงสุด 2 ใบ จากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			'id-id': "Pilih paling banyak 2 lembar Pokémon Steven yang merupakan Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "บอลโทรจิต",
			'id-id': "Bola Psikis"
		},

		damage: 20,
		cost: ["Psychic"]
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
	regulationMark: "I"
}

export default card