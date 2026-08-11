import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Cofagrigus",
		'th-th': "เดธคาน"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'id-id': "Tubuh Cofagrigus berupa emas mengilap. Kabarnya Pokémon ini sudah tidak ingat bahwa awalnya ia adalah manusia.",
		'th-th': "ร่างกายสีทองวิบวับ ว่ากันว่าลืมไปแล้วว่าเคยเป็นมนุษย์มาก่อน"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Aturan Baka",
			'th-th': "กฎเกณฑ์แห่งยมโลก"
		},

		effect: {
			'id-id': "Letakkan masing-masing sejumlah 6 Token Kerusakan pada semua Pokémon kedua pemain yang memiliki Ability.",
			'th-th': "วางตัวนับแดเมจบนโปเกมอนที่มีความสามารถของทั้งสองฝ่ายทุกตัว ตัวละ 6 ตัว"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'id-id': "Hollow Shot",
			'th-th': "ฮอลโลว์ช็อต"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card