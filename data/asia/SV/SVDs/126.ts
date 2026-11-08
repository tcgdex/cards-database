import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ทาบุนเนะ",
		'id-id': "Audino"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'th-th': "เป็นโปเกมอนที่มีจิตใจเมตตา จะเอาหนวดไปแตะเพื่อรับรู้ถึงความรู้สึกและสภาพร่างกายของฝ่ายตรงข้าม",
		'id-id': "Pokémon berhati lembut. Audino menekankan sungutnya untuk memahami perasaan dan kondisi tubuh makhluk tersebut."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "หาพรรคพวก",
			'id-id': "Mencari Teman"
		},

		effect: {
			'th-th': "เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			'id-id': "Pilih 1 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ตบ",
			'id-id': "Menampar"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card