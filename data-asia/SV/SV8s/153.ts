import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Tandemaus",
		th: "วักคาเนซูมิ"
	},

	illustrator: "USGMEN",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	description: {
		id: "Tandemaus selalu berdua pada saat apa pun. Pokémon ini membagi dua dengan sama rata makanan yang ditemukannya, lalu dimakan bersama dengan akrab.",
		th: "ไม่ว่าเมื่อไหร่ก็จะอยู่ด้วยกัน 2 ตัว เมื่อพบอาหารก็จะแบ่งเท่า ๆ กัน และกินด้วยกันอย่างสนิทสนม"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Main Kasar",
			th: "คลอเคลีย"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 10.",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 10"
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card