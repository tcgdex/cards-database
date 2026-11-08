import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โนก็อจจิ",
		'id-id': "Dunsparce"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'th-th': "สร้างทางวงกตในที่มืด พอมีคนเจอก็จะใช้หางขุดมุดดินหนี",
		'id-id': "Dunsparce membuat labirin di tempat gelap. Jika ada yang melihatnya, Pokémon ini akan melarikan diri dengan menggali lubang menggunakan ekornya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "สลับที่",
			'id-id': "Bertukar"
		},

		effect: {
			'th-th': "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			'id-id': "Tukar Pokémon ini dengan Pokémon Cadangan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "กระแทก",
			'id-id': "Menyeruduk"
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