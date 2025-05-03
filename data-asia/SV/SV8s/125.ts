import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Bronzong",
		th: "โดทาคุน"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		id: "Bronzong membuka lubang ke dunia lain dan menurunkan hujan dari sana. Oleh karena itu, Pokémon ini dijadikan sebagai dewa pembawa berkah panen.",
		th: "เปิดรูเชื่อมไปยังโลกอื่นแล้วทำให้ฝนตกลงมาจากรูนั้น จึงถูกบูชาใน ฐานะเทพแห่งการเกษตร"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Serangan Berputar",
			th: "โจมตีหมุนวน"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			id: "Double Impact",
			th: "ดับเบิลอิมแพกต์"
		},

		effect: {
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 100 untuk tiap lemparan dengan hasil sisi depan.",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x100"
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