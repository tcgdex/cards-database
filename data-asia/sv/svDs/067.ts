import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "ทามะทามะ",
		id: "Exeggcute"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		th: "ถ้าอยู่ไม่ครบทั้ง 6 ตัวจะรู้สึกไม่สงบใจ ถ้าหายไปแม้แต่ 1 ตัวจะเตรียมตัววิ่งหนีทันที",
		id: "Exeggcute tidak tenang jika tidak berenam. Begitu salah satu menghilang, Pokémon ini segera ingin melarikan diri."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "สะกดจิต",
			id: "Hipnotis"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		cost: ["Psychic"]
	}, {
		name: {
			th: "กลิ้งโจมตี",
			id: "Tubrukan Menggelinding"
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