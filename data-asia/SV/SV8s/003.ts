import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Exeggutor",
		th: "นัชชี"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		id: "Konon meskipun sangat jarang, salah satu kepalanya yang jatuh ke tanah akan berubah menjadi Exeggcute dan mulai bergerak.",
		th: "ว่ากันว่า นาน ๆ ครั้งจะมีหัวของมันสักหัวหนึ่งตกลงพื้น และหัวนั้นก็จะ กลายเป็นทามะทามะ แล้วเริ่มเคลื่อนไหว"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Jam Melempar Bola",
			th: "ชั่วโมงขว้างบอล"
		},

		effect: {
			id: "Lempar koin untuk tiap Energi yang dikenakan pada Pokémon Bertarung kedua pemain. Serangan ini memberikan kerusakan sejumlah 60 untuk tiap lemparan dengan hasil sisi depan.",
			th: "ทอยเหรียญตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ของทั้ง สองฝ่ายแดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x60"
		},

		damage: "60×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card