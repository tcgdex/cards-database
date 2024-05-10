import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "โอโตชิโดริ",
		id: "Bombirdier"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		th: "ใส่สิ่งของลงในถุงที่ทำจากขนที่หน้าอกและขนที่ร่วงหล่น จากนั้นจะเล่นโดยการปล่อยสิ่งของนั้นลงจากที่สูง",
		id: "Bombirdier bermain-main dengan menjatuhkan benda dari tempat tinggi yang dimasukkan ke dalam kantong yang terbuat dari bulu dada dan bulu sayapnya yang rontok."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "กระเป๋านำส่ง",
			id: "Saku Pengiriman"
		},

		effect: {
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			id: "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "ดาร์กเอดจ์",
			id: "Dark Edge"
		},

		effect: {
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 120,
		cost: ["Darkness", "Darkness", "Colorless"]
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
	regulationMark: "G"
}

export default card