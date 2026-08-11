import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "บูเบิร์น",
		'id-id': "Magmortar"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'th-th': "ตอนที่ยิงลูกไฟร้อน 2000 องศาเซลเซียสออกมาจากปลายแขน ร่างกายจะขาวขึ้นเล็กน้อยจากความร้อน",
		'id-id': "Saat ia menembakkan bola api bersuhu 2000 ℃ dari ujung lengannya, tubuhnya sedikit memutih karena panas."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "คลื่นแม็กมา",
			'id-id': "Aura Magma"
		},

		effect: {
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนที่เป็นสภาวะ[ไหม้]ของฝ่ายตรงข้าม จำนวน ตัวนับแดเมจที่วางด้วยสภาวะ[ไหม้]จะเพิ่มขึ้น 3 ตัว",
			'id-id': "Selama Pokémon ini ada di Arena, jumlah Token Kerusakan yang diletakkan akibat kondisi Luka Bakar pada Pokémon lawan yang mengalami kondisi Luka Bakar bertambah sejumlah 3."
		}
	}],

	attacks: [{
		name: {
			'th-th': "เพลิงประลัยกัลป์",
			'id-id': "Kobaran Api Penghangus"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม เป็นสภาวะ[ไหม้]",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		},

		damage: 90,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card