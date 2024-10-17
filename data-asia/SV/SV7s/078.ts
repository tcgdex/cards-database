import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โดคูร็อก",
		id: "Toxicroak"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		th: "มีถุงพิษในลำคอ เมื่อส่งเสียงร้องในลำคอ พิษที่สะสมไว้จะผสมจนเข้ากันและมีฤทธิ์แรงขึ้น",
		id: "Toxicroak memiliki kantong racun di tenggorokannya. Ketika menguak, racunnya terkocok dan meningkatkan kekuatannya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ต่อยตี",
			id: "Menohok"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "คลีนฮิต",
			id: "Clean Hit"
		},

		effect: {
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอนวิวัฒนาการ การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			id: "Jika Pokémon Bertarung lawan adalah Pokémon Evolusi, kerusakan yang diberikan bertambah sejumlah 90."
		},

		damage: "90+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card