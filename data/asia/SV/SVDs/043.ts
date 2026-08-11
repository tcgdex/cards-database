import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "พิคาชูex",
		'id-id': "Pikachu ex"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'th-th': "พิคาพันช์",
			'id-id': "Pika Punch"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ไดนามิกโวลต์",
			'id-id': "Dynamic Volt"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ ทั้งหมดที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi belakang, buang semua Energi yang dikenakan pada Pokémon ini ke Trash."
		},

		damage: 220,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card