import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "ทาบุนเนะ",
		id: "Audino"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		th: "เป็นโปเกมอนที่มีจิตใจเมตตา จะเอาหนวดไปแตะเพื่อรับรู้ถึงความรู้สึกและสภาพร่างกายของฝ่ายตรงข้าม",
		id: "Pokémon berhati lembut. Audino menekankan sungutnya untuk memahami perasaan dan kondisi tubuh makhluk tersebut."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "หาพรรคพวก",
			id: "Mencari Teman"
		},

		effect: {
			th: "เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Pilih 1 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "ตบ",
			id: "Menampar"
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