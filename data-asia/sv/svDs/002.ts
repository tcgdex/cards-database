import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "เฮราครอส",
		id: "Heracross"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		th: "ชอบน้ำผึ้งหวาน ๆ มาก ใช้เขาที่ภูมิใจเหวี่ยงอีกฝ่ายไปไกล ๆ เพื่อที่ตัวเองจะได้ยึดครองน้ำผึ้งไว้เพียงผู้เดียว",
		id: "Heracross sangat menyukai madu manis. Agar dapat memonopoli madunya, Pokémon ini menggunakan tanduk kebanggaannya untuk melempar lawannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "พุ่งเข้าชน",
			id: "Serudukan"
		},

		damage: 50,
		cost: ["Grass", "Grass"]
	}, {
		name: {
			th: "สแมชฮอร์น",
			id: "Smash Horn"
		},

		effect: {
			th: "แดเมจของท่าต่อสู้นี้จะไม่นำความต้านทานมาคิด",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh Resistansi."
		},

		damage: 110,
		cost: ["Grass", "Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card