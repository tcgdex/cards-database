import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ยาโดคิง",
		'id-id': "Slowking"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'th-th': "มีสติปัญญาและความสามารถในการหยั่งรู้ที่ยอดเยี่ยม ไม่ว่าเมื่อไหร่ก็จะทำตัวสบาย ๆ ไม่รีบไม่แตกตื่น",
		'id-id': "Slowking memiliki kecerdasan dan intuisi yang luar biasa. Di saat apa pun, Pokémon ini tidak panik, tenang, dan santai."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ท้าประลองไหวพริบ",
			'id-id': "Tantangan Inspirasi"
		},

		effect: {
			'th-th': "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด ถ้าการ์ดนั้นเป็นการ์ดโปเกมอน (ยกเว้น [โปเกมอนที่มีกฎ]) เลือกท่าต่อสู้ที่โปเกมอนนั้นมี 1 ท่า ใช้เป็นท่าต่อสู้นี้ได้",
			'id-id': "Buang 1 kartu dari atas Deck sendiri ke Trash, jika kartu tersebut adalah Pokémon (selain Pokémon yang memiliki Peraturan), pilih 1 serangan yang dimiliki Pokémon tersebut, lalu gunakan sebagai serangan ini."
		},

		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'th-th': "ซูเปอร์โทรจิต",
			'id-id': "Psikokinesis Super"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
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