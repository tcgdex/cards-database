import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โฟลเซล",
		'id-id': "Floatzel"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'th-th': "พอพองถุงลมแล้วสามารถให้คนขึ้นบนหลังได้ จะทำให้ถุงลมแฟบลงก่อนดำลงไป",
		'id-id': "Floatzel dapat mengangkut manusia di atas punggungnya dengan menggembungkan kantong apungnya. Pokémon ini menyusutkan kantong apungnya lalu menyelam."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "หางหมุนวน",
			'id-id': "Ekor Berpusar"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว นำโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม และการ์ดทั้งหมดที่ติดอยู่ กลับขึ้นมือฝ่ายตรงข้าม",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kembalikan Pokémon Bertarung lawan dan semua kartu yang dikenakannya ke Kartu Pegangan lawan."
		},

		cost: ["Water"]
	}, {
		name: {
			'th-th': "ปีนน้ำตก",
			'id-id': "Melawan Arus"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card