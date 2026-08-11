import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ซิมโบลา <ของ N>",
		'id-id': "Sigilyph <N>"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'th-th': "เมื่อทำการสำรวจทะเลทรายที่ซิมโบลาบินผ่าน ก็พบร่องรอยที่ สันนิษฐานว่าเป็นเมืองโบราณอยู่ใต้ทะเลทราย",
		'id-id': "Ketika dilakukan investigasi di bawah padang pasir tempat Sigilyph terbang, ditemukan peninggalan yang diduga merupakan kota purba."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "บอลโทรจิต",
			'id-id': "Bola Psikis"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			'th-th': "วิกทอรีซิมโบล",
			'id-id': "Victory Symbol"
		},

		effect: {
			'th-th': "เมื่อใช้ท่าต่อสู้นี้แล้ว ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายเราเป็น 1 ใบ การแบตเทิลนี้ฝ่ายเราชนะ",
			'id-id': "Jika sisa Kartu Point sendiri adalah 1 lembar saat menggunakan serangan ini, pemain dinyatakan menang pada permainan ini."
		},

		cost: ["Psychic", "Colorless", "Colorless"]
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