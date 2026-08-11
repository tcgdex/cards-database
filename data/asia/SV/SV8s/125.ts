import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Bronzong",
		'th-th': "โดทาคุน"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'id-id': "Bronzong membuka lubang ke dunia lain dan menurunkan hujan dari sana. Oleh karena itu, Pokémon ini dijadikan sebagai dewa pembawa berkah panen.",
		'th-th': "เปิดรูเชื่อมไปยังโลกอื่นแล้วทำให้ฝนตกลงมาจากรูนั้น จึงถูกบูชาใน ฐานะเทพแห่งการเกษตร"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Serangan Berputar",
			'th-th': "โจมตีหมุนวน"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'id-id': "Double Impact",
			'th-th': "ดับเบิลอิมแพกต์"
		},

		effect: {
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 100 untuk tiap lemparan dengan hasil sisi depan.",
			'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x100"
		},

		damage: "100×",
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card