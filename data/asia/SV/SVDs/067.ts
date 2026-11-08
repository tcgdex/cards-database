import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ทามะทามะ",
		'id-id': "Exeggcute"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'th-th': "ถ้าอยู่ไม่ครบทั้ง 6 ตัวจะรู้สึกไม่สงบใจ ถ้าหายไปแม้แต่ 1 ตัวจะเตรียมตัววิ่งหนีทันที",
		'id-id': "Exeggcute tidak tenang jika tidak berenam. Begitu salah satu menghilang, Pokémon ini segera ingin melarikan diri."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "สะกดจิต",
			'id-id': "Hipnotis"
		},

		effect: {
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		cost: ["Psychic"]
	}, {
		name: {
			'th-th': "กลิ้งโจมตี",
			'id-id': "Tubrukan Menggelinding"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
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
	regulationMark: "G"
}

export default card