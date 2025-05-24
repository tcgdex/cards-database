import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "โนก็อจจิ",
		id: "Dunsparce"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		th: "สร้างทางวงกตในที่มืด พอมีคนเจอก็จะใช้หางขุดมุดดินหนี",
		id: "Dunsparce membuat labirin di tempat gelap. Jika ada yang melihatnya, Pokémon ini akan melarikan diri dengan menggali lubang menggunakan ekornya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "สลับที่",
			id: "Bertukar"
		},

		effect: {
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			id: "Tukar Pokémon ini dengan Pokémon Cadangan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "กระแทก",
			id: "Menyeruduk"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card