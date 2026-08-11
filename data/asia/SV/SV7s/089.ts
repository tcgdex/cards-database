import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โครแบท",
		'id-id': "Crobat"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'th-th': "ขาทั้งสองข้างนั้นกลายสภาพเป็นปีก โฉบบินด้วยความเร็วสูงโดยไม่ส่งเสียง แล้วฝังเขี้ยวลงที่ท้ายทอยของเหยื่อ",
		'id-id': "Kedua kakinya berubah menjadi sayap. Crobat terbang dengan kecepatan tinggi tanpa menimbulkan suara lalu menyarangkan taringnya ke tengkuk mangsanya."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "ผู้ใช้เงา",
			'id-id': "Utusan Bayangan"
		},

		effect: {
			'th-th': "เทิร์นนี้ ถ้านำการ์ด [เทคนิคลับของอันสุ] จากบนมือออกมาใช้แล้ว ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 8 ใบ",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri jika pada giliran ini, Teknik Rahasia Janine telah dimainkan dari Kartu Pegangan. Ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 8 lembar."
		}
	}],

	attacks: [{
		name: {
			'th-th': "เขี้ยวมหาพิษ",
			'id-id': "Taring Toksik"
		},

		effect: {
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] จำนวนตัวนับแดเมจที่วางด้วยสภาวะ[พิษ]นี้จะเป็น 2 ตัว",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun. Jumlah Token Kerusakan yang diletakkan akibat kondisi Racun ini adalah 2."
		},

		damage: 120,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card