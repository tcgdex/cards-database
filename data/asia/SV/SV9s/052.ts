import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เนนดอลล์ <ของไดโกะ>",
		'id-id': "Claydol <Steven>"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'th-th': "ดูเหมือนว่าเกิดมาจากตุ๊กตาดินเหนียวของมนุษย์โบราณ ใช้พลังจิต ลอยตัวและเคลื่อนที่ไปในอากาศ",
		'id-id': "Kabarnya Claydol terlahir dari boneka lumpur buatan manusia purba. Pokémon ini menggunakan kekuatan psikokinesis untuk melayang dan bergerak di udara."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "แสงแห่งลางร้าย",
			'id-id': "Cahaya Mengerikan"
		},

		effect: {
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			'th-th': "เคลย์บลาสต์",
			'id-id': "Clay Blast"
		},

		effect: {
			'th-th': "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ ทั้งหมดที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash."
		},

		damage: 220,
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

	retreat: 2,
	regulationMark: "I"
}

export default card