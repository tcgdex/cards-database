import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โยคุบะริสึex",
		'id-id': "Greedent ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'th-th': "โลภเหลือเกิน",
			'id-id': "Super Rakus"
		},

		effect: {
			'th-th': "ดูการ์ด 3 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา นำการ์ดนั้นขึ้นมือ หรือทิ้งการ์ดนั้นที่ตำแหน่งทิ้งการ์ด และจั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
			'id-id': "Lihat 3 kartu dari atas Deck sendiri. Tambahkan kartu tersebut ke Kartu Pegangan atau buang kartu tersebut ke Trash dan ambil 3 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "กลิ้งโค่โล่",
			'id-id': "Gelinding Tergelincir"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [กลิ้งโค่โล่] ไม่ได้",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Gelinding Tergelincir."
		},

		damage: 210,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card