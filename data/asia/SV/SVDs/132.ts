import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "อิคิริงโกะ",
		'id-id': "Squawkabilly"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'th-th': "อิคิริงโกะขนสีเขียวเป็นกลุ่มที่มีกองกำลังใหญ่ที่สุด ในช่วงเช้าและเย็นที่พวกมันออกหาอาหารนั้นจะมีเสียงหนวกหูมาก",
		'id-id': "Squawkabilly berbulu hijau adalah Pokémon yang memiliki kekuasaan terbesar dalam spesiesnya. Pokémon ini sangat bising ketika mencari makan pada pagi dan malam hari."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เรียกเพื่อน",
			'id-id': "Memanggil Teman"
		},

		effect: {
			'th-th': "เลือกการ์ดโปเกมอน[พื้นฐาน]ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			'id-id': "Pilih paling banyak 2 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "บินขึ้น",
			'id-id': "Terbang"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว ถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
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