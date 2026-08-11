import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Victini",
		th: "วิคทินี"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		id: "Pokémon pembawa kemenangan. Dikatakan bahwa pelatih yang membawa Victini selalu menang dalam pertarungan apa pun.",
		th: "โปเกมอนที่นำพามาซึ่งชัยชนะ ว่ากันว่าเทรนเนอร์ที่พาวิคทินีมาด้วยจะ ชนะการประลองทุกอย่าง"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Victory Yell",
			th: "วิกทอรีเยล"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena, kerusakan akibat serangan yang digunakan oleh Pokémon Evolusi tipe {Api} sendiri kepada Pokémon Bertarung lawan bertambah sejumlah 10.",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ แดเมจของท่าต่อสู้ที่โปเกมอนวิวัฒนาการประเภท[ไฟ] ฝ่ายเรา ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+10]"
		}
	}],

	attacks: [{
		name: {
			id: "Api",
			th: "ไฟ"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card