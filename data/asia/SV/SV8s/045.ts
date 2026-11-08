import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Cryogonal",
		'th-th': "ฟรีจิโอ"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'id-id': "Cryogonal menggunakan rantainya yang terbuat dari es untuk mengikat dan membekukan lawan dengan sekaligus.",
		'th-th': "เมื่อใช้โซ่ที่ทำจากน้ำแข็งมัดฝ่ายตรงข้าม จะทำให้ฝ่ายตรงข้ามถูก แช่แข็งทั้งอย่างนั้นในอึดใจเดียว"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Call Sign",
			'th-th': "คอลไซน์"
		},

		effect: {
			'id-id': "Pilih 1 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			'th-th': "เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		},

		cost: ["Water"]
	}, {
		name: {
			'id-id': "Sinar Pembeku",
			'th-th': "ลำแสงเยือกแข็ง"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh.",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม เป็นสภาวะ[ชา]"
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card