import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เมกะยันมาex",
		'id-id': "Yanmega ex"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 280,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "บัซบูสต์",
			'id-id': "Buzz Boost"
		},

		effect: {
			'th-th': "ในเทิร์นฝ่ายเรา เมื่อโปเกมอนนี้ออกจากเบนช์มาที่ตำแหน่งต่อสู้ ใช้ได้ 1 ครั้ง เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ติดที่ โปเกมอนนี้ แล้วสับสำรับการ์ด",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri saat Pokémon ini masuk dari Cadangan ke Arena Bertarung. Pilih paling banyak 3 lembar Energi Dasar {Daun} dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		name: {
			'th-th': "เจ็ตไซโคลน",
			'id-id': "Jet Cyclone"
		},

		effect: {
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 3 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์ 1 ตัว",
			'id-id': "Pilih 3 Energi yang dikenakan pada Pokémon ini, lalu pindahkan ke 1 Pokémon Cadangan."
		},

		damage: 210,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
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